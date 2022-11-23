let arr = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'];
arr.sort();
for (let i = 0; i < arr.length-1; i++) {
    if (arr[i].split("@")[0] === arr[i+1].split("@")[0]) {
        console.log(true);
    }
    if (arr[i].split("@")[0] !== arr[i+1].split("@")[0]) {
        console.log(false);
    }
    
}
// console.log(arr[i].split("@")[0], arr[i].split("@")[1].split("."));