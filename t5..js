class Coffee {
    constructor(product, addon) {
        this.product = product;
        this.addon = addon;
    }
}
let brew1 = new Coffee("latte", 'milk');

if (brew1.product === "Espresso") {
    if (brew1.addon === "milk") {
        console.log('cost is 60');
    }
    if (brew1.addon === "cream") {
        console.log('cost is 75');
    }
    if (brew1.addon === "latte") {
        console.log('cost is 100');
    }
}
if (brew1.product === "cappuccino") {
    if (brew1.addon === "milk") {
        console.log('cost is 80');
    }
    if (brew1.addon === "cream") {
        console.log('cost is 90');
    }
    if (brew1.addon === "latte") {
        console.log('cost is 125');
    }
}
if (brew1.product === "latte") {
    if (brew1.addon === "milk") {
        console.log('cost is 100');
    }
    if (brew1.addon === "cream") {
        console.log('cost is 125');
    }
    if (brew1.addon === "latte") {
        console.log('cost is 150');
    }
}
// create a new instance every time as brew1 and it will calculate the cost based on the condition given by you 
// test cases
// let brew1 = new Coffee("latte", 'milk');
// let brew1 = new Coffee("Espresso", 'milk');