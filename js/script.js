function getComputerChoice(arr){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 't';
    }
    switch(playerSelection){
        case 'rock':
            return computerSelection === 'scissors' ? 'p' : 'c';
        case 'paper':
            return computerSelection === 'rock' ? 'p' : 'c';
        default:
            return computerSelection === 'paper' ? 'p' : 'c';
    }
}

function game(){
    const CANCEL_MSG = 'Player canceled the prompt!';
    let playerWins = 0;
    let compWins = 0;
    let ties = 0;
    for (let i = 0; i < 5; i++){
        let playerChoice = prompt("Enter rock, paper, or scissors: ");

        if (playerChoice === null){
            return CANCEL_MSG;
        }

        playerChoice = playerChoice.toLowerCase()

        if (!OPTIONS.includes(playerChoice)){
            alert('Invalid choose! Please try again.');
            i--;
            continue;
        }

        let compChoice = getComputerChoice(OPTIONS);
        let roundWinner = playRound(playerChoice, compChoice)

        switch (roundWinner){
            case 'p':
                playerWins++;
                break;
            case 'c':
                compWins++;
                break;
            default:
                ties++;
                break;
        }
    }

    console.log(`Player: ${playerWins} Computer: ${compWins} Ties: ${ties}`);
    
    let winner;
    if (playerWins > compWins){
        winner = PLAYER_WINS;
    } else if (compWins > playerWins){
        winner = COMP_WINS;
    } else {
        winner = TIE;
    }
    return winner;
}

const OPTIONS = ['rock', 'paper', 'scissors'];
const PLAYER_WINS = 'Congratulations! You win!'
const COMP_WINS = 'Sorry! Computer Wins!'
const TIE = "It's a tie!"

console.log(game());
