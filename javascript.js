let computerScore = 0;
let playerScore = 0;
//new
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

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
    console.log("The Computer chose: " + finalChoice); 
    return finalChoice;
   
   
}
function playRound(playerSelection) {    
    let computerSelection = computerPlay().toLowerCase();
    let result = "";
    
    if (playerSelection===computerSelection) {
        result = "It's a draw!";
    }

    else if (playerSelection==="rock") {
        if (computerSelection==="paper"){
            computerScore++;
            result = "You lost, Paper beats Rock!";
        }

        else {
            playerScore++;
            result = "You won, Rock beats Scissors!";
        }
    }

    else if (playerSelection==="paper"){
        if (computerSelection==="rock") {
            playerScore++;
            result = "You won! Paper beats Rock!";
        }

        else {
            computerScore++;
            result = "You lost! Scissors beats Paper!";
        }
    }

    else if (playerSelection==="scissors"){
        if (computerSelection==="rock") {
            computerScore++;
            result = "You lost! Rock beats Scissors!";
        }

        else{
            playerScore++;
            result = "You won! Scissors beats Paper!";
        }
    }
   console.log(result);
 
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