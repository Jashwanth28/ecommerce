let totalPrice = 998;
let jeansQuantity = 1;
let shirtQuantity = 1;
let jeansDeleted = false;
let shirtDeleted = false;
let jeansPlusEnabled = true;
let shirtPlusEnabled = true;

function updateTotalPrice() {
    totalPrice = (jeansDeleted ? 0 : jeansQuantity * 599) + (shirtDeleted ? 0 : shirtQuantity * 399);
    document.getElementById("totalPrice").innerText = totalPrice;
}

function increaseQuantity(product) {
    if (product === 'jeans' && !jeansDeleted && jeansPlusEnabled) {
        jeansQuantity++;
        document.getElementById("jeansQuantity").innerText = jeansQuantity;
        updateTotalPrice();
    } else if (product === 'shirt' && !shirtDeleted && shirtPlusEnabled) {
        shirtQuantity++;
        document.getElementById("shirtQuantity").innerText = shirtQuantity;
        updateTotalPrice();
    }
}

function decreaseQuantity(product) {
    if (product === 'jeans' && !jeansDeleted) {
        jeansQuantity = Math.max(1, jeansQuantity - 1);
        document.getElementById("jeansQuantity").innerText = jeansQuantity;
        updateTotalPrice();
    } else if (product === 'shirt' && !shirtDeleted) {
        shirtQuantity = Math.max(1, shirtQuantity - 1);
        document.getElementById("shirtQuantity").innerText = shirtQuantity;
        updateTotalPrice();
    }
}

function deleteProduct(product) {
    if (product === 'jeans') {
        if (!jeansDeleted) {
            totalPrice -= jeansQuantity * 599;
        }
        jeansQuantity = 0;
        document.getElementById("jeansQuantity").innerText = jeansQuantity;
        jeansDeleted = true;
        jeansPlusEnabled = false;
        shirtPlusEnabled = true; // Reset shirtPlusEnabled when jeans is deleted
    } else if (product === 'shirt') {
        if (!shirtDeleted) {
            totalPrice -= shirtQuantity * 399;
        }
        shirtQuantity = 0;
        document.getElementById("shirtQuantity").innerText = shirtQuantity;
        shirtDeleted = true;
        shirtPlusEnabled = false;
        jeansPlusEnabled = true; // Reset jeansPlusEnabled when shirt is deleted
    }
    updateTotalPrice();
}

function checkout() {
    const termsCheckbox = document.getElementById("termsCheckbox");
    if (!termsCheckbox.checked) {
        alert("Please agree to the terms and conditions before proceeding.");
        return;
    }
    // Implement the checkout logic here
}

// Call updateTotalPrice initially to set the correct total price
updateTotalPrice();