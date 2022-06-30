let computerScore = 0;
let playerScore = 0;
//new
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

const computerSelection = document.querySelector('.computer-selection');
const gameResult = document.querySelector('.game-result');

const yourScore = document.querySelector('.yourScore');
const compScore = document.querySelector('.compScore');
yourScore.textContent = playerScore;
compScore.textContent = computerScore;

rockBtn.addEventListener('click', () => {
  playRound("rock"); 
} );

paperBtn.addEventListener('click', () => {
    playRound("paper");
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors");
});

function computerPlay () {
    let choice = ["Rock", "Paper", "Scissors"];
    const finalChoice = choice[Math.floor(Math.random()*choice.length)];
    computerSelection.textContent = "The Computer chose: " + finalChoice; 
    return finalChoice;
   
   
}
function playRound(playerSelection) {    
    let computerSelection = computerPlay().toLowerCase();
    let result = "";
    
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0, computerScore = 0;
    }

    if (playerSelection===computerSelection) {
        result = "It's a draw!";
    }

    else if (playerSelection==="rock") {
        if (computerSelection==="paper"){
            computerScore++;
            compScore.textContent = computerScore;
            
            result = "You lost, Paper beats Rock!";
        }

        else {
            playerScore++;
            yourScore.textContent = playerScore;
            result = "You won, Rock beats Scissors!";
        }
    }

    else if (playerSelection==="paper"){
        if (computerSelection==="rock") {
            playerScore++;
            yourScore.textContent = playerScore;
            result = "You won! Paper beats Rock!";
        }

        else {
            computerScore++;
            compScore.textContent = computerScore;
            result = "You lost! Scissors beats Paper!";
        }
    }

    else if (playerSelection==="scissors"){
        if (computerSelection==="rock") {
            computerScore++;
            compScore.textContent = computerScore;
            result = "You lost! Rock beats Scissors!";
        }

        else{
            playerScore++;
            yourScore.textContent = playerScore;
            result = "You won! Scissors beats Paper!";
        }
    }
    if(playerScore === 5) result = "fmm veatz ca ai castigat";
    else if (computerScore === 5) result = "uilu ce pierdere umilitoare";
    

    gameResult.textContent = result;
 
    return result;
}

 function game(){
/*
   for (let i=0; i < 5; i++) {
        playRound(); 
   } 
*/

    if (playerScore > computerScore){
        console.log("You won!!!!!");
    }

    else if (playerScore < computerScore) {
        console.log("You lost :(");
    
    }
}


// game();