document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    
    const storedUser = localStorage.getItem(email);

    if (storedUser) {

        window.location.href = "reset-password.html?email=" + encodeURIComponent(email);
    } else {

        alert("No account found with this email address.");
    }
});