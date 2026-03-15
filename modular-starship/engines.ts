import { EngineSystem } from "./types";

export class Engines implements EngineSystem {
    public powerLevel: number;

    constructor(powerLevel: number) {
        this.powerLevel = powerLevel;
    }

    setPower(powerLevel: number): void {
        this.powerLevel = powerLevel;
        console.log("Engine power set to:", this.powerLevel);
    }
}
