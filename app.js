



function getComputerChoice(){
    randomNumber = Math.floor((Math.random()*3)+1);
    if (randomNumber === 1){
        return "rock";
    }
    else if (randomNumber===2){
        return "paper";
    }
    else {
         return "scissors";
    }
    }

function getHumanChoice(){
    userChoice = prompt("Choose between 'rock', 'paper' or 'scissors' ");
    return userChoice;
}



function playGame(){ 
    let humanScore = 0;
    let computerScore  = 0;
    function playRound(humanChoice, computerChoice){
        userChoice = humanChoice.toLowerCase();
        if (userChoice === computerChoice){
            console.log("Tie! Both you and computer chose " + userChoice);
            return
        }
        let result='Win';
        let first=userChoice;
        let second=computerChoice;
        if ((computerChoice==='rock' && userChoice==='paper') ||          
        (computerChoice==='paper' && userChoice==='scissors') ||        
        (computerChoice==='scissors' && userChoice==='rock') ){
            humanScore++;
        }
        else {
            computerScore++;
            result='lose';
            first=computerChoice;
            second=userChoice;
        }
        console.log("You " + result + "! " + first + " beats " + second);     
        }

    for (let i=0; i<5; i++){
        human = getHumanChoice();
        computer = getComputerChoice();
        playRound(human, computer);
    }

    if (humanScore > computerScore){
        console.log("You Won the Game!");
    }
    else if (humanScore < computerScore){
        console.log("Computer Won the Game!");
    }
    else{
        console.log("Tie!")
    }

}

playGame();

