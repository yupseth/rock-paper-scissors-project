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

    else{
        result = "somebody won";
    }
    console.log(result);
    return result;
}
playRound();