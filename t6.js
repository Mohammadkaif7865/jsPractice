// console.log( null  && true && false);
let passIt = () => {
    return console.log('this is the callback function');
}
let highOrder = (a) => {
    console.log(a());
}
highOrder(passIt);