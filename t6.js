// console.log( null  && true && false);
// let passIt = () => {
//     return console.log('this is the callback function');
// }
// let highOrder = (a) => {
//     console.log(a());
// }
// highOrder(passIt);
// let curryIng = (a) => {
//     return function (b) {
//         return a + b;
//     }

// }
// console.log(curryIng(2)(6));
// let a = [23,34,213,32,352,'mango','nanna'];
// ! slice range act like this [ )
// console.log(a.slice(1,4));
let a = [23,32,12,34,43];
let b = a.filter((item)=> item === 12 );
// let b = a.map((item)=> item === 12 );
console.log(b);