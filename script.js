// document.addEventListener('load', function (e) {
    // const profileForm = document.getElementById('profileForm');
    // const username1 = document.getElementById('Username1');
    // const username2 = document.getElementById('Username2');

    // const players = JSON.parse(localStorage.getItem("players")) || [];

    // profileForm.addEventListener("submit", function (e) {
    //     e.preventDefault();

    //     const firstPlayer = username1.value;
    //     const secondPlayer = username2.value;

    //     const userInfo = {
    //     }

    //     localStorage.setItem("players", JSON.stringify(userInfo));

    // });


    // // Function to display player scores
    // function displayScores() {
    //     const playerScores = [];

    //     for (let i = 0; i < localStorage.length; i++) {
    //         const playerName = localStorage.key(i);
    //         const playerScore = parseInt(localStorage.getItem(playerName));
    //         playerScores.push({ name: playerName, score: playerScore });
    //     }

    //     // Sort playerScores by score in descending order
    //     playerScores.sort((a, b) => b.score - a.score);

    //     // Display the top two players
    //     const topPlayers = playerScores.slice(0, 2);

    //     let scoreText = "Top 2 joueurs : \n";
    //     topPlayers.forEach((player, index) => {
    //         scoreText += `${index + 1}. ${player.name}: ${player.score} points\n`;
    //     });

    //     alert(scoreText);
    // }

    // // Add this code below the rest of the event listeners
    // const showScoresButton = document.getElementById("show-scores");
    // showScoresButton.addEventListener("click", displayScores);





// });


// Function to set player names
    function setPlayerNames() {
        player1Name = document.getElementById("player1").value;
        player2Name = document.getElementById("player2").value;

        if (player1Name && player2Name) {
            localStorage.setItem("player1Name", player1Name);
            localStorage.setItem("player2Name", player2Name);
            return true;
        } else {
            alert("Veuillez entrer les noms des deux joueurs.");
            return false;
        }
    }

const startButton = document.getElementById("start-game");
    startButton.addEventListener("click", function () {
        console.log("you");
        let is_true = setPlayerNames();
        if (is_true) {
            // window.location.href = 'http://127.0.0.1:5500/game.html';
            window.location.assign("game.html");
        }
    });

