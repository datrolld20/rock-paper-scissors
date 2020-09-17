// choices[] is self-explanatory if you've ever played the game!
const choices = ['ROCK', 'PAPER', 'SCISSORS'];


// computerPlay() makes the computer's choice randomly
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

// playRound() takes user input via prompt.
// It calls computerPlay() and compares the two to determine a winner.
// User input must be case insensitive (thus toUpperCase()).
function playRound() {
    let playerSelection = prompt('Choose your weapon! \nRock - Paper - Scissors').toUpperCase();
    let computerSelection = computerPlay();

    if(choices.indexOf(playerSelection) === -1) {
        alert('Hmmm, that choice doesn\'t look valid. \nTry again.');
        return null;
    }

    if(playerSelection === computerSelection) {
        alert(`You both chose ${playerSelection}! It's a tie!`);
        return 'tie';
    }
    else if(playerSelection === 'ROCK') {
        if(computerSelection === 'PAPER') {
            alert(`${computerSelection} beats ${playerSelection}. You lose!`);
            return 'computer';
        }
        else if(computerSelection === 'SCISSORS') {
            alert(`${playerSelection} beats ${computerSelection}. You win!`);
            return 'player';
        }
    }

    else if(playerSelection === 'PAPER') {
        if(computerSelection === 'SCISSORS') {
            alert(`${computerSelection} beats ${playerSelection}. You lose!`);
            return 'computer';
        }
        else if(computerSelection === 'ROCK') {
            alert(`${playerSelection} beats ${computerSelection}. You win!`);
            return 'player';
        }
    }

    else if(playerSelection === 'SCISSORS') {
        if(computerSelection === 'ROCK') {
            alert(`${computerSelection} beats ${playerSelection}. You lose!`);
            return 'computer';
        }
        else if(computerSelection === 'PAPER') {
            alert(`${playerSelection} beats ${computerSelection}. You win!`);
            return 'player';
        }
    }
}

// playGame() calls playRound() 5 times
// It will keep track of user's and computer's scores.
// ${i} will only increment if the user's input is valid.
function playGame() {
    
}