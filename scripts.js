function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) return 'rock';
    if (rand == 2) return 'paper';
    if (rand == 3) return 'scissors';
}

function endGame(winnerString, winner) {
    gameContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultText.textContent = winnerString;

    console.log("Running!");
    console.log(winnerString);
    
    if (winner == "Player") {
        console.log("Player wins!");
        resultText.classList.add("winner");
    }
        
    if (winner == "Computer") {
        console.log("Computer wins!");
        resultText.classList.add("loser");
    }
    
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerChoice.classList.remove("round-winner","round-loser", "round-draw");
    computerChoice.classList.remove("round-winner","round-loser", "round-draw");
    playerChoice.src = "images/question.png";
    computerChoice.src = "images/question.png";
    resultText.classList.remove("winner","loser");
}

function displayChoices(playerSelection, computerSelection) {
    playerChoice.src = "images/" + playerSelection + ".png";
    computerChoice.src = "images/" + computerSelection + ".png";
}

function playRound(playerSelection) {
    let winner = 'Player';
    let computerSelection = computerPlay();

    console.log("Running playRound");

    displayChoices(playerSelection, computerSelection);

    playerChoice.classList.remove("round-winner","round-loser", "round-draw");
    computerChoice.classList.remove("round-winner","round-loser", "round-draw");


    if (playerSelection == computerSelection) {
        winner = 'None';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            winner = 'Computer';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            winner = 'Computer';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            winner = 'Computer';
        } 
    }

    if (winner == 'Player') { 
        playerScore++; 
        playerChoice.classList.add('round-winner');
        computerChoice.classList.add('round-loser');
    }

    if (winner == 'Computer') { 
        computerScore++;
        computerChoice.classList.add('round-winner');
        playerChoice.classList.add('round-loser');
    }

    if (winner == 'None') {
        playerChoice.classList.add('round-draw');
        computerChoice.classList.add('round-draw');
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore == 5) {
        endGame("Congratulations! You win!", winner);
    }

    if (computerScore == 5) {
        endGame("Unlucky! You lose!", winner);
    }

}

let playerSelection = 'Rock';
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const gameContainer = document.querySelector('.rps-game-container');
const resultContainer = document.querySelector('.result-container');
const resultText = document.querySelector('.result-text');

const buttons = document.querySelectorAll('.player-button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(btn.getAttribute('data'));
    })
});

const playAgainButton = document.querySelector('.play-again-button');
playAgainButton.addEventListener('click', () => {
    resetGame();
}); 