let a = [23,234, 43, 2, 435, 43, -1, 323, 323,34534];
let element = a[0];
for (let i = 0; i < a.length - 1; i++) {
    if (a[i + 1] > element) {
        element = a[i + 1];
    }
}
console.log(element);