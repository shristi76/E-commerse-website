// Sample perfume products with high-quality images
const products = [
    { id: 1, name: "Dior Sauvage", price: 120, image: "https://m.media-amazon.com/images/I/61VrOdENbAL._AC_UF894,1000_QL80_.jpg" },
    { id: 2, name: "Chanel No.5", price: 150, image: "https://m.media-amazon.com/images/I/71-KqvjHQiL._AC_UL600_FMwebp_QL65_.jpg" },
    { id: 3, name: "Gucci Bloom", price: 140, image: "https://m.media-amazon.com/images/I/51STwV7QGjL._AC_UF894,1000_QL80_.jpg" },
    { id: 4, name: "Armani Code", price: 110, image: "https://m.media-amazon.com/images/I/61Dj+l3pGXL._AC_UL600_FMwebp_QL65_.jpg" },
    { id: 5, name: "Versace Eros", price: 130, image: "https://m.media-amazon.com/images/I/71a0yFf6+xL._AC_UL600_FMwebp_QL65_.jpg" }
];

let cartCount = 0;

// Function to load products dynamically
function loadProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <button class="like-btn" onclick="toggleLike(this)">
                <i class="fas fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });

    // Add animation when products load
    gsap.from(".product", { opacity: 0, y: 50, stagger: 0.2, duration: 1 });
}

// Add to Cart function
function addToCart() {
    cartCount++;
    alert("Item added to cart!");
}

// Like button toggle
function toggleLike(button) {
    button.classList.toggle("liked");
}

// Checkout function
function checkout() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Proceeding to checkout...");
    }
}

// Go Back function
function goBack() {
    window.history.back();
}

// Load products when page loads
document.addEventListener("DOMContentLoaded", loadProducts);


// Go Back Function - Redirects to login.html
function goBack() {
    window.location.href = "login.html";
}




function checkout() {
    // Create the checkout modal container
    let modal = document.createElement("div");
    modal.classList.add("checkout-modal");

    // Modal content
    modal.innerHTML = `
        <div class="checkout-content">
            <h2>Checkout Details</h2>

            <!-- Select Size -->
            <label for="size">Choose Size:</label>
            <select id="size">
                <option value="">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>

            <!-- Select Quantity -->
            <label for="quantity">Choose Quantity:</label>
            <input type="number" id="quantity" min="1" value="1">

            <!-- Select Payment Method -->
            <label for="payment">Payment Method:</label>
            <select id="payment">
                <option value="">Select</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
            </select>

            <!-- Buttons -->
            <button onclick="confirmCheckout()">Confirm</button>
            <button onclick="closeModal()">Cancel</button>
        </div>
    `;

    // Add modal to the document
    document.body.appendChild(modal);
}

// Function to confirm checkout
function confirmCheckout() {
    let size = document.getElementById("size").value;
    let quantity = document.getElementById("quantity").value;
    let payment = document.getElementById("payment").value;

    // Validate inputs
    if (!size || !quantity || !payment) {
        alert("Please select size, quantity, and payment method.");
        return;
    }

    alert(`Order Confirmed!\nSize: ${size}\nQuantity: ${quantity}\nPayment: ${payment}`);
    
    // Close the modal
    closeModal();
}

// Function to close the modal
function closeModal() {
    let modal = document.querySelector(".checkout-modal");
    if (modal) {
        modal.remove();
    }
}
