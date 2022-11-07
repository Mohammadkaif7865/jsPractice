// # array destructuring
// let a = ['elephant', 'lion', 'zebra', 'penguin', 'hog'];
// let [b, ...c] = a;
// console.log(b);
// console.log(c);
// Output  :elephant
// [ 'lion', 'zebra', 'penguin', 'hog' ]
// # object destructuring methods
let a = {
    name: "hola",
    class: 'men'
}
let { name } = a;
console.log(name);