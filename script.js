document.addEventListener("DOMContentLoaded", () => {
    const username = localStorage.getItem("username") || "User";
    document.getElementById("username").textContent = username;
});
