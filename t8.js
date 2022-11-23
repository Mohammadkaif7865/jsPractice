let arr = [2,2,2,2,2] ;
let avg, total = 0, count = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
avg = total / arr.length;
for (let i = 0; i < arr.length; i++) {
    if (avg === arr[i]) {
        count++;
    }

}
console.log(count);