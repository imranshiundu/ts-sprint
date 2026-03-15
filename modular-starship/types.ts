export interface NavSystem {
    x: number;
    y: number;
    z: number;
    setCourse(x: number, y: number, z: number): void;
}

export interface EngineSystem {
    powerLevel: number;
    setPower(powerLevel: number): void;
}

export interface WeaponSystem {
    target: string | null;
    lockTarget(target: string): void;
    fire(): void;
}
