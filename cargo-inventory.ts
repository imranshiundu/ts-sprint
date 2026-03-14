function getFirstItem<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(getFirstItem(["crate1", "crate2"]));
console.log(getFirstItem([10, 20, 30]));
console.log(getFirstItem([]));
