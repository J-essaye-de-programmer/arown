function showCategory(category) {
    const categoryGames = {
        "adventure": ["Game A1", "Game A2", "Game A3"],
        "action": ["Game B1", "Game B2", "Game B3"],
        "strategy": ["Game C1", "Game C2", "Game C3"]
    };

    let display = document.getElementById("category-display");
    display.innerHTML = `<h3>${category} Games</h3>`;

    if (categoryGames[category]) {
        categoryGames[category].forEach(game => {
            let gameDiv = document.createElement("div");
            gameDiv.innerHTML = `<p>${game}</p>`;
            display.appendChild(gameDiv);
        });
    } else {
        display.innerHTML = "<p>No games available in this category.</p>";
    }
}

// Fake Most Played Games
let mostPlayedGames = ["Game 1", "Game 2", "Game 3", "Block Builder"];
document.getElementById("most-played").innerHTML = mostPlayedGames.map(g => `<li>${g}</li>`).join("");
