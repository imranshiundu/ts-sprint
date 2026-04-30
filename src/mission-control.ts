type MissionPriority = 'low' | 'normal' | 'critical';

type MissionPhase =
  | { status: 'draft'; owner: string }
  | { status: 'ready'; approvedBy: string; approvedAt: string }
  | { status: 'blocked'; reason: string };

interface CrewMember {
  id: string;
  name: string;
  role: 'captain' | 'engineer' | 'pilot' | 'medic' | 'analyst';
  certified: boolean;
}

interface MissionManifest {
  code: string;
  priority: MissionPriority;
  fuel: number;
  oxygenHours: number;
  crew: CrewMember[];
  phase: MissionPhase;
  hazards?: string[];
}

type MissionReport = Readonly<{
  code: string;
  ready: boolean;
  riskScore: number;
  notes: string[];
}>;

function assertRange(name: string, value: number, min: number, max: number): string | null {
  if (value < min || value > max) return `${name} must be between ${min} and ${max}.`;
  return null;
}

export function validateManifest(manifest: MissionManifest): string[] {
  const notes: string[] = [];
  const fuelIssue = assertRange('fuel', manifest.fuel, 0, 100);
  if (fuelIssue) notes.push(fuelIssue);
  if (manifest.oxygenHours < 24) notes.push('oxygenHours must be at least 24.');
  if (manifest.crew.length < 2) notes.push('mission requires at least two crew members.');
  if (!manifest.crew.some((member) => member.role === 'pilot')) notes.push('mission requires a pilot.');
  if (manifest.crew.some((member) => !member.certified)) notes.push('all crew members must be certified.');
  if (manifest.phase.status === 'blocked') notes.push(`mission is blocked: ${manifest.phase.reason}`);
  if (manifest.phase.status === 'draft') notes.push(`mission is still in draft with ${manifest.phase.owner}.`);
  return notes;
}

export function calculateRisk(manifest: MissionManifest): number {
  let risk = 0;
  if (manifest.priority === 'critical') risk += 25;
  if (manifest.fuel < 50) risk += 20;
  if (manifest.oxygenHours < 48) risk += 15;
  risk += (manifest.hazards?.length ?? 0) * 10;
  risk += manifest.crew.filter((member) => !member.certified).length * 20;
  return Math.min(risk, 100);
}

export function createMissionReport(manifest: MissionManifest): MissionReport {
  const notes = validateManifest(manifest);
  const riskScore = calculateRisk(manifest);
  return Object.freeze({
    code: manifest.code,
    ready: notes.length === 0 && riskScore < 60 && manifest.phase.status === 'ready',
    riskScore,
    notes: notes.length ? notes : ['mission is launch-ready.'],
  });
}

const demo: MissionManifest = {
  code: 'ORBIT-21',
  priority: 'critical',
  fuel: 74,
  oxygenHours: 72,
  hazards: ['meteor-field'],
  phase: { status: 'ready', approvedBy: 'Mission Director', approvedAt: new Date().toISOString() },
  crew: [
    { id: 'c1', name: 'Amina', role: 'captain', certified: true },
    { id: 'c2', name: 'Jonas', role: 'pilot', certified: true },
    { id: 'c3', name: 'Imani', role: 'engineer', certified: true },
  ],
};

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(JSON.stringify(createMissionReport(demo), null, 2));
}
