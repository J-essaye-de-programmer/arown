document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dob = new Date(document.getElementById("dob").value);
            const age = calculateAge(dob);

            localStorage.setItem("userAge", age);
            localStorage.setItem("loggedIn", true);
            window.location.href = "index.html";
        });
    }

    checkLoginStatus();
});

function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

function checkLoginStatus() {
    const loggedIn = localStorage.getItem("loggedIn");
    const loginLink = document.querySelector("nav a[href='login.html']");

    if (loggedIn) {
        loginLink.innerText = "Logout";
        loginLink.href = "#";
        loginLink.addEventListener("click", () => {
            localStorage.clear();
            window.location.href = "index.html";
        });
    }
}
