function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) return 'Rock';
    if (rand == 2) return 'Paper';
    if (rand == 3) return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    let winner = 'Player';

    if (playerSelection == computerSelection) {
        console.log("Draw!");
        winner = 'None';
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            console.log("Lose! Paper beats Rock");
            winner = 'Computer';
        } else if (computerSelection == 'Scissors') {
            console.log("Win! Rock beats Scissors");
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            console.log("Win! Paper beats Rock");
        } else if (computerSelection == 'Scissors') {
            console.log("Lose! Scissors beats Paper");
            winner = 'Computer';
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            console.log("Lose! Rock beats Scissors");
            winner = 'Computer';
        } else if (computerSelection == 'Paper') {
            console.log("Win! Scissors beats Paper");
        }
    }

    return winner;

}

let playerSelection = 'Rock';
let winner;
let score = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?");
        winner = playRound(playerSelection, computerPlay());
        if (winner == 'Player') {score++;}
        console.log(`${winner} won the round!`);
    }
}

game();
console.log(`Your score was: ${score}`);