let p = new Promise((resolve, reject) => {
    let a = 1 ;
    if (a == 2) {
        resolve('success');
    }
    else {
        reject('error');
    }
})
p.then((message) => {
    console.log("this is the message: " + message);
}).catch((message) => {
    console.log('this is the message: ' + message);
})