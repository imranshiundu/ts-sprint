type TelemetryCallback = (data: number, timestamp: number) => void;

const logTelemetry: TelemetryCallback = (data, timestamp) => {
    console.log(`Data: ${data}, Timestamp: ${timestamp}`);
};
