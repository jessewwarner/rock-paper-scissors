function getComputerChoice(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection){
    console.log(`Player: ${playerSelection} Comp: ${computerSelection}`);
    if (playerSelection === computerSelection){
        return TIE;
    }
    switch(playerSelection){
        case 'rock':
            return computerSelection === 'scissors' ? PLAYER_WINS : COMP_WINS;
        case 'scissors':
            return computerSelection === 'paper' ? PLAYER_WINS : COMP_WINS;
        case 'paper':
            return computerSelection === 'rock' ? PLAYER_WINS : COMP_WINS;
        default:
            return 'Oh no! Something went wrong!';
    }
}

const OPTIONS = ['rock', 'paper', 'scissors'];
const PLAYER_WINS = 'Congratulations! You win!'
const COMP_WINS = 'Sorry!, Computer Wins!'
const TIE = "It's a tie!"

let winner = playRound('rock', getComputerChoice(OPTIONS));
console.log(winner);