let arr = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'jkl@yahoo.com', 'def@gmail.com', "xye@gmail.com", "zty@gmail.com"];
arr.sort();
let i = 0;
while (i < arr.length - 2) {
    if (arr[i].split("@")[0] === arr[i + 3].split("@")[0]) {

        let temp1 = arr[i + 1];
        let temp2 = arr[i + 2];
        let temp3 = arr[i + 3];
        arr[i + 1] = temp3;
        arr[i + 2] = temp1;
        arr[i + 3] = temp2;
        i += 4;
    }
    else if (arr[i].split("@")[0] === arr[i + 2].split("@")[0]) {
        if (arr[i].split("@")[1].split(".")[0] !== "channelier") {
            let temp1 = arr[i];
            let temp2 = arr[i + 1];
            let temp3 = arr[i + 2];
            arr[i] = temp3;
            arr[i + 1] = temp1;
            arr[i + 2] = temp2;
        }
        else if (arr[i].split("@")[1].split(".")[0] === "channelier" && arr[i + 2].split("@")[1].split(".")[0] === "yahoo") {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i + 2];
            arr[i + 2] = temp;
        }
        i += 3;
        console.log(arr.length - 2, i);
    }
    else if (arr[i].split("@")[0] === arr[i + 1].split("@")[0]) {

        if (arr[i].split("@")[1].split(".")[0] !== "channelier" && arr[i + 1].split("@")[1].split(".")[0] === "yahoo") {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

        i += 2;
    }
    else i++;

}
console.log(arr);
// ? Finally done