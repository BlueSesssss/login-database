document.getElementById("reset-password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newPassword = document.getElementById("new-password").value;
    const confirmNewPassword = document.getElementById("confirm-new-password").value;

    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");

    if (newPassword !== confirmNewPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (newPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const user = JSON.parse(storedUser);

        user.password = newPassword;

        localStorage.setItem(email, JSON.stringify(user));

        alert("Your password has been successfully reset. You can now log in with your new password.");

        window.location.href = "index.html";
    } else {
        alert("No account found with this email address.");
    }
});
