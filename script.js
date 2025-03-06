document.addEventListener("DOMContentLoaded", function () {
    const gameCards = document.querySelectorAll(".game-card");
    const gameModal = document.getElementById("game-modal");
    const gameFrame = document.getElementById("game-frame");

    gameCards.forEach((card) => {
        card.addEventListener("click", function () {
            const game = card.getAttribute("data-game");
            gameFrame.src = `games/${game}.html`;
            gameModal.style.display = "block";
        });
    });

    window.closeModal = function () {
        gameModal.style.display = "none";
        gameFrame.src = "";
    };

    window.filterGames = function (category) {
        gameCards.forEach((card) => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    };
});
