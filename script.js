document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert("Login successful!");

        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("No account found with this email. Please create an account.");
    }
});