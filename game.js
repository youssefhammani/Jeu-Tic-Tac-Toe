document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const resetButton = document.getElementById("reset");
    // const startButton = document.getElementById("start-game");


    let currentPlayer = "X";
    let gameOver = false;

    let player1Name = "";
    let player2Name = "";
    let player1Score = 0;
    let player2Score = 0;

    // Initialize player names and scores from localStorage
    player1Name = localStorage.getItem("player1Name") || "Joueur 1";
    player2Name = localStorage.getItem("player2Name") || "Joueur 2";
    player1Score = parseInt(localStorage.getItem("player1Score")) || 0;
    player2Score = parseInt(localStorage.getItem("player2Score")) || 0;
    displayPlayerInfo();



    // Function to update player scores
    function updatePlayerScores() {
        localStorage.setItem("player1Score", player1Score);
        localStorage.setItem("player2Score", player2Score);
    }

    // Function to display player names and scores
    function displayPlayerInfo() {
        const playerInfo = document.getElementById("player-info");
        playerInfo.innerHTML = `
            <p class="player">${player1Name} : ${player1Score} points</p>
            <p class="player">${player2Name} : ${player2Score} points</p>
        `;
    }

    // Initialize the game board
    function createBoard() {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = i;
                cell.dataset.col = j;
                board.appendChild(cell);
            }
        }
    }

    // Handle player's move
    function handleMove(event) {
        const cell = event.target;
        console.log("cell.textContent", cell.textContent);
        if (!cell.classList.contains("cell") || cell.textContent !== "" || gameOver) {
            return;
        }

        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(cell)) {
            gameOver = true;
            if (currentPlayer === "X") {
                player1Score += 1;
                localStorage.setItem("winner", player1Name);
            } else {
                player2Score += 1;
                localStorage.setItem("winner", player2Name);
            }
            updatePlayerScores();
            displayPlayerInfo();
            alert(`Joueur ${currentPlayer} remporte la partie !`);
        } else if (checkDraw()) {
            gameOver = true;
            alert("La partie est un match nul !");
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    // Check for a win
    function checkWin(cell) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // Horizontal et vertical
            [-1, -1], [1, 1], [-1, 1], [1, -1] // Diagonales
        ];

        for (const [dx, dy] of directions) {
            let count = 1;
            for (let i = 1; i < 5; i++) {
                const newRow = row + i * dx;
                const newCol = col + i * dy;
                const nextCell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
                if (nextCell && nextCell.textContent === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }
            for (let i = 1; i < 5; i++) {
                const newRow = row - i * dx;
                const newCol = col - i * dy;
                const nextCell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
                if (nextCell && nextCell.textContent === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }
            if (count >= 5) {
                return true;
            }
        }
        return false;
    }

    // Check for a draw
    function checkDraw() {
        const cells = document.querySelectorAll(".cell");
        for (const cell of cells) {
            if (cell.textContent === "") {
                return false;
            }
        }
        return true;
    }

    // Reset the game
    function resetGame() {
        const cells = document.querySelectorAll(".cell");
        for (const cell of cells) {
            cell.textContent = "";
            cell.classList.remove("X", "O");
        }
        currentPlayer = "X";
        gameOver = false;
        document.getElementById("player1").value = "";
        document.getElementById("player2").value = "";
        document.getElementById("player-names").style.display = "block";
        board.style.display = "none";

    }

    // const backHome = document.getElementById('backHome');
    // backHome.addEventListener("click", function () {
    //     localStorage.removeItem("player1Score");
    //     localStorage.removeItem("player2Score");
    // });

    createBoard();

    board.addEventListener("click", handleMove);
    resetButton.addEventListener("click", resetGame);



});
