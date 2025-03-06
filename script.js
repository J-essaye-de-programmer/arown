document.addEventListener("DOMContentLoaded", function () {
    const gameLinks = document.querySelectorAll(".game-card");
    const gameModal = document.getElementById("game-modal");
    const gameFrame = document.getElementById("game-frame");

    gameLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const gameFile = this.getAttribute("data-game-file"); // Only the game file
            gameFrame.src = `games/${gameFile}`; // Load the actual game file inside iframe
            gameModal.style.display = "flex";
        });
    });

    window.closeModal = function () {
        gameModal.style.display = "none";
        gameFrame.src = ""; // Clear the iframe when closing
    };
});
