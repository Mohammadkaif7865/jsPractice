// # array destructuring
// let a = ['elephant', 'lion', 'zebra', 'penguin', 'hog'];
// let [b, ...c] = a;
// console.log(b);
// console.log(c);
// Output  :elephant
// [ 'lion', 'zebra', 'penguin', 'hog' ]
// ! The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
// # object destructuring methods
let a = {
    name: "hola",
    class: 'men',
    age: 23,
}
let { name, ...rest } = a;
console.log(name);
console.log(rest);
// Output : hola
// { class: 'men', age: '23' }