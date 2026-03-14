type Timestamp = {
    timestamp: Date;
};

type Destination = {
    planetName: string;
    sector: string;
} & Timestamp;

type WarpDrive = {
    warpFactor: number;
} & Timestamp;

type NavigationCommand = Destination | WarpDrive;

const destination: Destination = {
    planetName: "Mars",
    sector: "Sector 7G",
    timestamp: new Date(),
};

const warpDrive: WarpDrive = {
    warpFactor: 5,
    timestamp: new Date(),
};

let navigationCommand: NavigationCommand = destination;
