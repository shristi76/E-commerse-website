async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "index.html";
    }
}


function login() {
    // Get input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Basic validation
    if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
    }
    
    // Redirect to index.html
    window.location.href = "index.html";
}

