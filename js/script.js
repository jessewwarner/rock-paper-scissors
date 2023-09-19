function getComputerChoice(arr){
    // Generate a random number for the index
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function resetGame() {
    playerWins = 0;
    compWins = 0;
    ties = 0;
    pScore.textContent = playerWins;
    cScore.textContent = compWins;
    tieScore.textContent = ties;
}

function updateScores(winner){
    switch (winner) {
        case 'p':
            playerWins += 1;
            pScore.textContent = playerWins;
            break;
        case 'c':
            compWins += 1;
            cScore.textContent = compWins;
            break;
        default:
            ties += 1;
            tieScore.textContent = ties;
            break;
    }
    if (playerWins === 5 || compWins === 5){
        winMsg.textContent = playerWins === 5 ? PLAYER_WINS_MSG : COMP_WINS_MSG;
        resetGame();
    }
}

// Compare the player's and computer's choices to see who won
function playRound(playerSelection){
    console.log(playerSelection);
    const choice = getComputerChoice(OPTIONS);
    if (playerSelection === choice){
        updateScores('t');
        return;
    }

    // Determine the winner
    switch(playerSelection){
        case 'rock':
            if (choice === 'scissors') updateScores('p');
            else updateScores('c');
            break;
        case 'paper':
            if (choice === 'rock') updateScores('p');
            else updateScores('c');
            break;
        default:
            if (choice === 'paper') updateScores('p');
            else updateScores('c');
            break;
    }
}

const OPTIONS = ['rock', 'paper', 'scissors'];
const PLAYER_WINS_MSG = 'Congratulations! You win!'
const COMP_WINS_MSG = 'Sorry! Computer Wins!'
const TIE_MSG = "It's a tie!"

let playerWins = 0;
let compWins = 0;
let ties = 0;

const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const tieScore = document.querySelector('#tie-score')
const winMsg = document.querySelector('.win-msg');

const gameButtons = document.querySelectorAll('.game-button');

gameButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.classList[1]);
    });
});
