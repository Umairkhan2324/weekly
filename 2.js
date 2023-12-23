// Simple shopping cart program using arrays and splice method
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Initial shopping cart array
var shoppingCart = [];
// Function to add an item to the shopping cart
function addItem(item) {
    shoppingCart.push(item);
    printCart();
}
// Function to remove an item from the shopping cart
function removeItem(item) {
    var index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        printCart();
    }
    else {
        console.log("".concat(item, " not found in the cart."));
    }
}
// Function to update the quantity of an item in the shopping cart
function updateQuantity(item, quantity) {
    var index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice.apply(shoppingCart, __spreadArray([index, 1], new Array(quantity).fill(item), false));
        printCart();
    }
    else {
        console.log("".concat(item, " not found in the cart."));
    }
}
// Function to print the contents of the shopping cart
function printCart() {
    console.log('Shopping Cart:', shoppingCart);
}
// Example usage
addItem('Apple');
addItem('Banana');
addItem('Orange');
removeItem('Banana');
updateQuantity('Apple', 3);
