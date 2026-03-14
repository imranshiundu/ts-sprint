interface ShipConfig {
    engineType: string;
    maxSpeed: number;
    shieldCapacity: number;
}

type PartialShipConfig = Partial<ShipConfig>;
type ReadonlyShipConfig = Readonly<ShipConfig>;

const initialConfig: ShipConfig = {
    engineType: "Impulse Drive",
    maxSpeed: 10,
    shieldCapacity: 100,
};

const configUpdate: PartialShipConfig = {
    maxSpeed: 15,
};

const readOnlyConfig: ReadonlyShipConfig = initialConfig;
