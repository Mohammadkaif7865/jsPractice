let arr = [12, 15, 23, 25, 34, 47, 67, 87];
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
// Time complexity O(n)
// Space complexity O(n)
// Test cases [12, 15, 23, 25, 34, 47, 67, 87] , [12, 15, 23, 34, 47, 67, 87]