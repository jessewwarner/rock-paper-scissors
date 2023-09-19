function getComputerChoice(arr){
    // Generate a random number for the index
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Compare the player's and computer's choices to see who won
function playRound(playerSelection){
    const choice = getComputerChoice(OPTIONS);
    if (playerSelection === choice){
        return 't';
    }

    // Determine the winner
    switch(playerSelection){
        case 'rock':
            return choice === 'scissors' ? 'p' : 'c';
        case 'paper':
            return choice === 'rock' ? 'p' : 'c';
        default:
            return choice === 'paper' ? 'p' : 'c';
    }
}

const OPTIONS = ['rock', 'paper', 'scissors'];
const PLAYER_WINS_MSG = 'Congratulations! You win!'
const COMP_WINS_MSG = 'Sorry! Computer Wins!'
const TIE_MSG = "It's a tie!"

let playerWins = 0;
let compWins = 0;
let ties = 0;

