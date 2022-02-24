function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) return 'rock';
    if (rand == 2) return 'paper';
    if (rand == 3) return 'scissors';
}

function endGame(winnerString) {
    winnerDisplay.textContent = winnerString;
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function playRound(playerSelection) {
    let winner = 'Player';
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        resultDisplay.textContent = "Draw!";
        winner = 'None';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            resultDisplay.textContent = "Lose! Paper beats Rock";
            winner = 'Computer';
        } else if (computerSelection == 'scissors') {
            resultDisplay.textContent = "Win! Rock beats Scissors";
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            resultDisplay.textContent = "Win! Paper beats Rock";
        } else if (computerSelection == 'scissors') {
            resultDisplay.textContent = "Lose! Scissors beats Paper";
            winner = 'Computer';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            resultDisplay.textContent = "Lose! Rock beats Scissors";
            winner = 'Computer';
        } else if (computerSelection == 'paper') {
            resultDisplay.textContent = "Win! Scissors beats Paper";
        }
    }

    if (winner == 'Player') { playerScore++; }
    if (winner == 'Computer') { computerScore++;}

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore == 5) {
        endGame("Congratulations! You win!");
    }

    if (computerScore == 5) {
        endGame("Unlucky! You lose!");
    }

}

let playerSelection = 'Rock';
let winner;
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('.result-display');
const winnerDisplay = document.querySelector('.winner-display');

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(btn.getAttribute('data'));
    })
});