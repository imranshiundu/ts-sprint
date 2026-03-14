interface NavigationLogEntry {
    timestamp: number;
    coordinates: [number, number, number];
    speed: number;
    event: string;
    notes: string;
}

type NavigationData = Pick<NavigationLogEntry, "timestamp" | "coordinates">;
type LogSummary = Omit<NavigationLogEntry, "notes">;

const navData: NavigationData = {
    timestamp: Date.now(),
    coordinates: [12, -5, 30],
};

const logSmry: LogSummary = {
    timestamp: Date.now(),
    coordinates: [12, -5, 30],
    speed: 500,
    event: "Course Correction",
};
