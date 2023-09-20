document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    const resetButton = document.getElementById("reset");
    let currentPlayer = "X";
    let gameOver = false;

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

    

    createBoard();

});
