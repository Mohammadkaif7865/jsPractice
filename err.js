// * yes we can use true as mathematical expression 1
// console.log(true + true + true /3);
let arr = [34, 56, 3, 2, 65, 45];
for (let i = 0; i < 5; i++) {
    arr.unshift(arr.pop());
    
}
console.log(arr);