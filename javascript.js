function computerPlay () {
    let choice = ["Rock", "Paper", "Scissors"];
    const finalChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log("The Computer chose: " + finalChoice); 
    return finalChoice;
   
}

computerPlay()

function playRound() {

}