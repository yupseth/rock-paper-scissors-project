function computerPlay () {
    let choice = ["Rock", "Paper", "Scissors"];
    const finalChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log("The Computer chose: " + finalChoice); 
    return finalChoice;
   
}
function playRound(playerSelection, computerSelection) {    
    computerSelection = computerPlay();
    playerSelection = "Rock";
    let result = "";
    
    if (playerSelection===computerSelection) {
        result = "It's a draw!";
    }

    else if (playerSelection==="Rock") {
        if (computerSelection==="Paper"){
            result = "You lost, Paper beats Rock!";
        }

        else {
            result = "You won, Rock beats Scissors!";
        }
    }

    else if (playerSelection==="Paper"){
        if (computerSelection==="Rock") {
            result = "You won! Paper beats Rock!";
        }

        else {
            result = "You lost! Scissors beats Paper!";
        }
    }

    else if (playerSelection==="Scissors"){
        if (computerSelection==="Rock") {
            result = "You lost! Rock beats Scissors!";
        }

        else{
            result = "You won! Scissors beats Paper!";
        }
    }
    console.log(result);
    return result;
}
playRound();