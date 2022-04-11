let store = ['nike', 'adidas', 'puma'];
let shoppingCart = [];

let nikeProduct = {
    name: "Nike Shoes",
    price: 80,
    description: "all white shoes"
}

let adidasProduct = {
    name: "Adidas Shoes",
    price: 140,
    description: "all black shoes"
}

let pumaProduct = {
    name: "Puma Shoes",
    price: 100,
    description: "all white shoes"
}

let allProducts = [nikeProduct, adidasProduct, pumaProduct]

let totalItemsInCart = document.getElementById('numberHolder').innerHTML;

function addToCart(newValue, brand) {
console.log(brand)
// Recognize Item
newValue = totalItemsInCart++;

console.log(totalItemsInCart);

// Take the ItemName --> addToCart
if (brand === 'nike') {
    shoppingCart.push(nikeProduct.name);
} else if (brand === 'adidas') {
    shoppingCart.push(adidasProduct.name);
} else if (brand === 'puma') {
    shoppingCart.push(pumaProduct.name);
}

// display new result of cart now that something has been adeded
document.getElementById('numberHolder').innerHTML = totalItemsInCart;
console.log(shoppingCart);
}



// for (let i = 0; i < 3; i++) {
//     shoppingCart[i] = store[i]
// }

// shoppingCart[0] = store[0];

// console.log(shoppingCart[0]);
// console.log(shoppingCart[1]);
// console.log(shoppingCart[2]);