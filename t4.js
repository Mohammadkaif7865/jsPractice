let arr = [12, 34, 23, 12, 67, 87, 47];
let arr2 = [];
let i = 0;
let j = arr.length - 1;
while (i <= j) {
    arr2.push(arr[j]);
    j--;
    arr2.push(arr[i]);
    i++;
}
console.log(arr2);