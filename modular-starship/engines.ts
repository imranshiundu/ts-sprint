import { EngineSystem } from "./types";

export class Engines implements EngineSystem {
    constructor(public powerLevel: number) { }

    setPower(powerLevel: number): void {
        this.powerLevel = powerLevel;
        console.log("Engine power set to:", this.powerLevel);
    }
}
