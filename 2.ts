// Simple shopping cart program using arrays and splice method

// Initial shopping cart array
let shoppingCart: string[] = [];

// Function to add an item to the shopping cart
function addItem(item: string): void {
    shoppingCart.push(item);
    printCart();
}

// Function to remove an item from the shopping cart
function removeItem(item: string): void {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
        printCart();
    } else {
        console.log(`${item} not found in the cart.`);
    }
}

// Function to update the quantity of an item in the shopping cart
function updateQuantity(item: string, quantity: number): void {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1, ...new Array(quantity).fill(item));
        printCart();
    } else {
        console.log(`${item} not found in the cart.`);
    }
}

// Function to print the contents of the shopping cart
function printCart(): void {
    console.log('Shopping Cart:', shoppingCart);
}

// Example usage
addItem('Apple');
addItem('Banana');
addItem('Orange');
removeItem('Banana');
updateQuantity('Apple', 3);
