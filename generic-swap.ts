function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}

console.log(swap("delta", 3));
console.log(swap(true, { x: 10 }));
