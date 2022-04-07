let store = ['nike', 'adidas', 'puma'];
let shoppingCart = [];

for (let i = 0; i < 3; i++) {
    shoppingCart[i] = store[i]
}

shoppingCart[0] = store[0];

console.log(shoppingCart[0]);
console.log(shoppingCart[1]);
console.log(shoppingCart[2]);