document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dob = new Date(document.getElementById("dob").value);
            const age = calculateAge(dob);

            sessionStorage.setItem("userAge", age);
            window.location.href = "index.html";
        });
    }

    filterGamesByAge();
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

function filterGamesByAge() {
    const age = sessionStorage.getItem("userAge");
    if (!age) return;

    document.querySelectorAll(".game").forEach(game => {
        const gameTitle = game.querySelector("p").innerText;
        if (gameTitle.includes("18+")) {
            if (age < 18) {
                game.style.display = "none";
            }
        }
    });
}

