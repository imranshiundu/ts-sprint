import { NavSystem } from "./types";

export class Navigation implements NavSystem {
    constructor(
        public x: number,
        public y: number,
        public z: number
    ) { }

    setCourse(x: number, y: number, z: number): void {
        this.x = x;
        this.y = y;
        this.z = z;
        console.log("Course set to:", this.x, this.y, this.z);
    }
}
