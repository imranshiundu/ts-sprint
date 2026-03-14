import { WeaponSystem } from "./types";

export class Weapons implements WeaponSystem {
    public target: string | null;

    constructor(target: string | null) {
        this.target = target;
    }

    lockTarget(target: string | null): void {
        this.target = target;
        console.log("Target locked:", this.target);
    }

    fire(): void {
        console.log("Fire!");
    }
}
