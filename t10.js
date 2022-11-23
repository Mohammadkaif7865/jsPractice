let a = [1, 4, 3, 4];
let min = a[0], max = a[0], minCount = 0, maxCount = 0, average = 0;
for (let i = 0; i < a.length - 1; i++) {
    if (a[i + 1] > max) {
        max = a[i + 1];
    }
    if (a[i + 1] < min) {
        min = a[i + 1];
    }
}

for (let i = 0; i < a.length; i++) {
    if (a[i] === min) {
        minCount++;
    }
    if (a[i] === max) {
        maxCount++;
    }
}
average = (minCount * min + maxCount * max) / (minCount + maxCount);
console.log(average);