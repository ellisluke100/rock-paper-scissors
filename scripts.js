function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) return 'rock';
    if (rand == 2) return 'paper';
    if (rand == 3) return 'scissors';
}

function displayGameEndText(winnerString) {
    pageContainer.classList.add("hidden");
    const gameEndTag = document.createElement("p");
    const gameEndTextNode = document.createTextNode(winnerString);
    gameEndTag.appendChild(gameEndTextNode);
    const bd = document.querySelector('#bod');
    bd.appendChild(gameEndTag);

}

function endGame(winnerString) {
    playerScore = 0;
    computerScore = 0;
    //playerScoreDisplay.textContent = playerScore;
    //computerScoreDisplay.textContent = computerScore;
    displayGameEndText(winnerString);

}

function displayChoices(playerSelection, computerSelection) {
    playerChoice.src = "images/" + playerSelection + ".png";
    computerChoice.src = "images/" + computerSelection + ".png";
}

function playRound(playerSelection) {
    let winner = 'Player';
    let computerSelection = computerPlay();

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
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const pageContainer = document.querySelector('#page-container');

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playRound(btn.getAttribute('data'));
    })
});