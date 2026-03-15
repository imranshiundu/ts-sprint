type Component =
    | string
    | number
    | { type: "sensor"; status: string }
    | { type: "motor"; speed: number }
    | null;

function getComponentInfo(component: Component): string {
    if (typeof component === "string") {
        return `Component ID: ${component}`;
    }

    if (typeof component === "number") {
        return `Component Value: ${component}`;
    }

    if (typeof component === "object") {
        if (component === null) {
            return "Unknown Object Component";
        }

        if (component.type === "sensor") {
            return `Sensor Status: ${component.status}`;
        }

        if (component.type === "motor") {
            return `Motor Speed: ${component.speed}`;
        }

        return "Unknown Object Component";
    }

    return "Invalid Component Type";
}
