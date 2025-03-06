const games = {
    "blockbuilder": `
        <canvas id="gameCanvas" width="500" height="400"></canvas>
        <script>
            let canvas = document.getElementById("gameCanvas");
            let ctx = canvas.getContext("2d");

            let block = { x: 200, y: 350, width: 50, height: 50 };
            let ball = { x: 220, y: 200, radius: 10, dx: 2, dy: 2 };

            function drawBlock() {
                ctx.fillStyle = "blue";
                ctx.fillRect(block.x, block.y, block.width, block.height);
            }

            function drawBall() {
                ctx.fillStyle = "red";
                ctx.beginPath();
                ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
                ctx.fill();
            }

            function update() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawBlock();
                drawBall();

                ball.x += ball.dx;
                ball.y += ball.dy;

                if (ball.x <= 0 || ball.x >= canvas.width) ball.dx *= -1;
                if (ball.y <= 0 || ball.y >= canvas.height) ball.dy *= -1;
            }

            document.addEventListener("keydown", function(e) {
                if (e.key === "ArrowLeft" && block.x > 0) block.x -= 20;
                if (e.key === "ArrowRight" && block.x < canvas.width - block.width) block.x += 20;
            });

            setInterval(update, 16);
        </script>
    `,
    "game1": `<p>This is Game 1</p>`,
    "game2": `<p>This is Game 2</p>`
};

const params = new URLSearchParams(window.location.search);
const gameName = params.get("game");
document.getElementById("game-container").innerHTML = games[gameName] || "<h2>Game not found</h2>";
