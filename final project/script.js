const cart = [];
let total = 0;

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    total += price;

    const cartList = document.getElementById("cart");
    const cartItem = document.createElement("li");
    cartItem.className = "list-group-item";
    cartItem.innerHTML = `${productName} - ₹${price}`;
    cartList.appendChild(cartItem);

    const totalDisplay = document.getElementById("total");
    totalDisplay.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
    } else {
        alert("Thank you for your purchase! Total amount: ₹" + total);
        cart.length = 0;
        total = 0;

        const cartList = document.getElementById("cart");
        cartList.innerHTML = "";

        const totalDisplay = document.getElementById("total");
        totalDisplay.textContent = total;
    }
}
