let cart = [];

function addToCart(name, style, price, strike) {
    const product = {
        name: name,
        style: style,
        price: price,
        strike: strike
    };
    cart.push(product);
    alert(`${name} added to cart!`);
    console.log(cart); // Optional: Display the cart contents in the console.
}