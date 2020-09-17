// choices[] is self-explanatory if you've ever played the game!
const choices = ['ROCK', 'PAPER', 'SCISSORS'];

// Making playerSelection and computerSelection global so they can be referenced by playGame() for brevity.
// Probably not the most elegant. TODO: Refactor with best practices.
let playerSelect, computerSelection = '';


// computerPlay() makes the computer's choice randomly
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

// playRound() takes user input via prompt.
// It calls computerPlay() and compares the two to determine a winner.
// User input must be case insensitive (thus toUpperCase()).
function playRound(roundNumber) {
    playerSelection = prompt(`ROUND ${roundNumber + 1} - Choose your weapon!` +
        `\n\n${`ROCK - PAPER - SCISSORS`}\n `).toUpperCase();
    computerSelection = computerPlay();

    if(choices.indexOf(playerSelection) === -1) {
        return null;
    }

    if(playerSelection === computerSelection) {
        return 'tie';
    }
    else if(playerSelection === 'ROCK') {
        if(computerSelection === 'PAPER') {
            return 'computer';
        }
        else if(computerSelection === 'SCISSORS') {
            return 'player';
        }
    }

    else if(playerSelection === 'PAPER') {
        if(computerSelection === 'SCISSORS') {
            return 'computer';
        }
        else if(computerSelection === 'ROCK') {
            return 'player';
        }
    }

    else if(playerSelection === 'SCISSORS') {
        if(computerSelection === 'ROCK') {
            return 'computer';
        }
        else if(computerSelection === 'PAPER') {
            return 'player';
        }
    }
}

// playGame() calls playRound() 5 times
// It will keep track of user's and computer's scores.
// ${i} will only increment if the user's input is valid.
function playGame() {
    alert('ROCK - PAPER - SCISSORS' +
    '\nThe Ultimate Game of Fate!\u2122' +
    '\n\nClick \'OK\' or press Enter to start...\n ');

    let compScore = 0;
    let playerScore = 0;
    let playAgain = '';

    for(let i = 0; i < 5;) {
        let result = playRound(i);

        console.log(result);

        switch(result) {
            case 'computer':
                compScore++;
                alert(`${computerSelection} beats ${playerSelection}. You lose!` +
                    `\n\nYour Score: ${playerScore}  --  Computer Score: ${compScore}\n `);
                i++;
                break;

            case 'player':
                playerScore++;
                alert(`${playerSelection} beats ${computerSelection}. You win!` +
                    `\n\nYour Score: ${playerScore}  --  Computer Score: ${compScore}\n `);
                i++;
                break;

            case 'tie':
                playerScore++;
                compScore++;
                alert(`You both chose ${playerSelection}. It's a tie!` +
                `\n\nYour Score: ${playerScore}  --  Computer Score: ${compScore}\n `);
                i++;
                break;

            case null:
                alert('Hmmm, that choice doesn\'t look valid. \nTry again.\n ');
                break;
        }

            
    }

    if(playerScore > compScore) {
        playAgain = prompt(`Final Score: ${playerScore}  --  ${compScore}` +
            `\n\nCONGRATULATIONS! You managed to crush your foes and still make it home in time for dinner!` +
            `\n\nPlay again?`);
    }
    else if(compScore > playerScore) {
        playAgain = prompt(`Final Score: ${playerScore}  --  ${compScore}` +
            `\n\nYIKES! That guy embarrassed you in front of everyone! At least your mom still likes you... probably.` +
            `\n\nPlay again?`);
    }
    else if(playerScore == compScore) {
        alert(`Final Score: ${playerScore}  --  ${compScore}` +
            `\n\nSUDDEN DEATH!!!`);
        playRound('OF YOUR LIFE');
        playAgain = prompt(`You both chose ${playerSelection}.` + `\n\nI chose NUCLEAR BOMB!` + `\n\nEveryone dead.\n\nPlay again?`);
    }

    if(playAgain.toUpperCase()[0] == 'Y' ) {
        playGame();
    }
}

playGame();