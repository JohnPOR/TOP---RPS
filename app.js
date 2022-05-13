let playerScore = 0;
let computerScore = 0;

//The weapons of choice
const arr = ["rock", "paper", "scissors"];

//Define a function that randomly returns either rock, paper, or scissors
function computerPlay() {
    const computerTurn = Math.floor(Math.random() * arr.length);
    return arr[computerTurn];
}


//Write a function that plays a single round, takes two inputs: playerSelection and computerSelection - return string ie. you win/lose x beats x
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt(`Please enter your choice: ${arr[0]}, ${arr[1]}, or ${arr[2]}`).toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        return "IT'S A TIE!!! PLAY AGAIN!";
    }

    else if (
        computerSelection === arr[0] && playerSelection === arr[2] ||
        computerSelection === arr[2] && playerSelection === arr[1] ||
        computerSelection === arr[1] && playerSelection === arr[0]
    ) 
    
    {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } 
    
    else {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
}

//function "game" which calls playRound() inside to play 5 rounds and keep score - think loops - console.log to display user results per round anad at the end

function game() {
    while(playerScore < 5 || computerScore < 5) {
        playRound();
    }
}