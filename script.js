document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username") || "Guest";
    document.getElementById("username").textContent = username;

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("username");
        window.location.reload();
    });

    updatePopularGames();
});

function playGame(gameId) {
    let playedGames = JSON.parse(localStorage.getItem("playedGames")) || {};
    playedGames[gameId] = (playedGames[gameId] || 0) + 1;
    localStorage.setItem("playedGames", JSON.stringify(playedGames));

    alert("Loading " + gameId);
    updatePopularGames();
}

function updatePopularGames() {
    let playedGames = JSON.parse(localStorage.getItem("playedGames")) || {};
    let sortedGames = Object.entries(playedGames).sort((a, b) => b[1] - a[1]).slice(0, 5);

    let list = document.getElementById("popular-games-list");
    list.innerHTML = "";
    sortedGames.forEach(([game, plays]) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<a href="games.html?game=${game}">${game.replace(/\d+/g, '')} (${plays} plays)</a>`;
        list.appendChild(listItem);
    });
}
