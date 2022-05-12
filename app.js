const arr = ["rock", "paper", "scissors"];

//use prompt to get user input - convert to lower case to avoid case sensitivity
function playerSelection() {
    let playerInput = prompt(`Please enter your choice: ${arr[0]}, ${arr[1]}, or ${arr[2]}`);

    let playerTurn = playerInput.toLowerCase();
    return playerTurn

}


//function returns either rock, paper, or scissors
function computerPlay() {
    const compTurn = Math.floor(Math.random() * 3);
    return arr[compTurn];
}


//function plays a round, takes two inputs: playerSelection and computerSelection - return string ie. you win/lose x beats x
function playRound(playerSelection, computerSelection) {
    
}




// return results of function call - not console.log


//function "game" which calls playRound() inside to play 5 rounds and keep score - think loops - console.log to display user results per round anad at the end 