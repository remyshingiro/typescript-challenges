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