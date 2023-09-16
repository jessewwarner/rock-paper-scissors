// Get the computer's choice
function getComputerChoice(arr){
    // Generate a random number for the index
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

// Compare the player's and computer's choices to see who won
function playRound(playerSelection, computerSelection){
    // Check if it is a tie
    if (playerSelection === computerSelection){
        return 't';
    }

    // Determine the winner
    switch(playerSelection){
        case 'rock':
            return computerSelection === 'scissors' ? 'p' : 'c';
        case 'paper':
            return computerSelection === 'rock' ? 'p' : 'c';
        default:
            return computerSelection === 'paper' ? 'p' : 'c';
    }
}

// Game loop to play 5 rounds and determine the winner
function game(){
    const CANCEL_MSG = 'Player canceled the prompt!';

    let playerWins = 0;
    let compWins = 0;
    let ties = 0;

    // Play 5 rounds
    for (let i = 0; i < 5; i++){
        // Get the player's choice
        let playerChoice = prompt("Enter rock, paper, or scissors: ");

        // Return the cancel message if the player clicks cancel on the prompt
        if (playerChoice === null){
            return CANCEL_MSG;
        }

        // Convert the players choice to lower case
        playerChoice = playerChoice.toLowerCase()

        // Validate player input
        if (!OPTIONS.includes(playerChoice)){
            alert('Invalid choose! Please try again.');
            i--;
            continue;
        }

        let compChoice = getComputerChoice(OPTIONS);
        let roundWinner = playRound(playerChoice, compChoice)

        // Increment wins
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

    // Display the total wins and ties
    console.log(`Player: ${playerWins} Computer: ${compWins} Ties: ${ties}`);
    
    // Determine the final winner
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

// Run the game loop and display the results in the console
console.log(game());
