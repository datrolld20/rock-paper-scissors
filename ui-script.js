let playerScore, cpuScore, roundNumber;
let playerSelection, computerSelection, result;

let roundCounter = document.querySelector('#round-counter');
let playerScoreCounter = document.querySelector('#player-score');
let cpuScoreCounter = document.querySelector('#cpu-score');
let messageBox = document.querySelector('#message');

let nextRoundButton = document.querySelector('#next-round');
let resetButton = document.querySelector('#reset');

let cpuChoice = document.querySelector('#cpu-choice');
let choiceArr = ['rock', 'scissors', 'paper'];
let choiceButtons = document.querySelectorAll('.choice');

choiceButtons.forEach(btn => {
    btn.addEventListener('click', playRound);
})

nextRoundButton.addEventListener('click', nextRound);
resetButton.addEventListener('click', playGame);


function cycleCpuChoice() {
    let cycleIterator = 0;
    cycleTimer = setInterval(function () {
        if (cycleIterator >= 3) {
            cycleIterator = 0;
        }
        cpuChoice.setAttribute('src',
            `img/${choiceArr[cycleIterator]}-clipped.png`);
        cycleIterator++;
    }, 250)
}

function playRound(e) {
    playerSelection = e.target.getAttribute('id');
    computerSelection = computerSelect();
    clearInterval(cycleTimer);
    cpuChoice.setAttribute('src',
        'img/question-clipped.png');
    cpuChoice.style.background = 'lightcoral';
    e.target.classList.add('selected');

    result = compare(playerSelection, computerSelection);
    choiceButtons.forEach(btn => {
        btn.removeEventListener('click', playRound);
        btn.classList.remove('btn');
    })
    messageBox.classList.add('hide');
    messageBox.addEventListener('transitionend', function () {
            cpuChoice.setAttribute('src',
                `img/${computerSelection}-clipped.png`);

            if(result === 'tie') {
                messageBox.textContent = 'It\s a tie.';
                playerScore ++;
                cpuScore ++;
            }
            else if(result === 'lose') {
                messageBox.textContent = 'You lose.';
                cpuScore ++;
            }
            else if(result === 'win') {
                messageBox.textContent = 'You win!';
                playerScore ++;
            }

        messageBox.classList.remove('hide');
        messageBox.addEventListener('transitionend', function () {
            setScore();
        });
    }, {once: true});


    setTimeout(function(){
        nextRoundButton.classList.remove('invisible');
        resetButton.classList.remove('invisible');
    }, 2000);
}

function compare(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'tie';
        }
        else if (computerSelection === 'paper') {
            return 'lose';
        }
        else if (computerSelection === 'scissors') {
            return 'win';
        }
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return 'tie';
        }
        else if (computerSelection === 'scissors') {
            return 'lose';
        }
        else if (computerSelection === 'rock') {
            return 'win';
        }
    }

    else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return 'tie';
        }
        else if (computerSelection === 'rock') {
            return 'lose';
        }
        else if (computerSelection === 'paper') {
            return 'win';
        }
    }
}

function computerSelect() {
    return choiceArr[
        Math.floor(Math.random() * 3)
    ];
}


function setScore() {

    if (playerScore != playerScoreCounter.textContent) {
        playerScoreCounter.classList.add('grow');
        playerScoreCounter.addEventListener('transitionend', function () {
            playerScoreCounter.textContent = playerScore;
            playerScoreCounter.classList.remove('grow');
        });
    }
    if (cpuScore != cpuScoreCounter.textContent) {
        cpuScoreCounter.classList.add('grow');
        cpuScoreCounter.addEventListener('transitionend', function () {
            cpuScoreCounter.textContent = cpuScore;
            cpuScoreCounter.classList.remove('grow');
        });
    }
}

function resetBackgrounds() {
    cpuChoice.style.background = '#eee';
    choiceButtons.forEach(btn => {
        btn.classList.remove('selected');
    })
}

function nextRound() {
    roundNumber ++;
    roundCounter.innerText = `Round ${roundNumber}`
    choiceButtons.forEach(btn => {
        btn.addEventListener('click', playRound);
        btn.classList.add('btn');
    })
    resetBackgrounds();
    setTimeout(cycleCpuChoice, 300);
    nextRoundButton.classList.add('invisible');
    resetButton.classList.add('invisible');

    messageBox.classList.add('hide');
    messageBox.addEventListener('transitionend', function () {
            messageBox.textContent = 'Choose your weapon!';

        messageBox.classList.remove('hide');
    }, {once: true});
}

function playGame() {
    playerScore = 0;
    cpuScore = 0;
    roundNumber = 0;
    setScore();
    nextRound();
}

playGame();