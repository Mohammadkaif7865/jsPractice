function sum(a, b, ...c) {
    if (c.length > 0) {
        return a + b + c.reduce((total, item) => {
            return total + item
        }, 10)
    }
    else return a + b;
}
console.log(sum(1, 3, 4, 5, 6));
console.log(sum(1, 3));