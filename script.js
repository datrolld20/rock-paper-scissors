

// computerPlay() makes the computer's choice randomly
function computerPlay() {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];

    return choices[Math.floor(Math.random() * 3)];
}

// playRound() takes user input via prompt.
// It calls computerPlay() and compares the two to determine a winner.
// User input must be case insensitive (thus toUpperCase()).
function playRound() {
    let playerSelection = prompt('Choose your weapon! \nRock - Paper - Scissors').toUpperCase();
}

playRound();