type Thruster = {
    name: string;
    powerLevel: number;
};

type Thrusters = {
    left: Thruster;
    right: Thruster;
    main: Thruster;
};

const thrusters: Thrusters = {
    left: { name: "Left Thruster", powerLevel: 0 },
    right: { name: "Right Thruster", powerLevel: 0 },
    main: { name: "Main Thruster", powerLevel: 0 },
};

function setThrusterPower(thruster: "left" | "right" | "main", powerLevel: number): string {
    if (thruster !== "left" && thruster !== "right" && thruster !== "main") {
        throw new Error(`Invalid thruster designation: ${thruster}`);
    }

    if (powerLevel < 0 || powerLevel > 100) {
        throw new Error("Power level out of acceptable range (0-100)");
    }

    thrusters[thruster].powerLevel = powerLevel;
    return `${thrusters[thruster].name}: ${powerLevel}% output`;
}
