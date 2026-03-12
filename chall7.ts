const swapEnds = <T>(arr: T[]): T[] => {
    if(arr.length < 2) return [...arr];

    const res = [...arr];
    const firstIndex = 0;
    const lastIndex = res.length - 1;

    const temp = res[firstIndex];
    res[firstIndex] = res[lastIndex];
    res[lastIndex] = temp;
    return res;
}

const numberArray = [1, 2, 3, 4];
const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];
const objectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

console.log(swapEnds(numberArray));
console.log(swapEnds(stringArray));
console.log(swapEnds(objectArray));