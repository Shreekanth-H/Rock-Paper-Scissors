



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



function playGame(){ 
    let humanScore = 0;
    let computerScore  = 0;
    div = document.getElementById('message');
    function playRound(humanChoice, computerChoice){
        userChoice = humanChoice.toLowerCase();
        if (userChoice === computerChoice){
            div.textContent = "Tie! Both you and computer chose " + userChoice;
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
        div.textContent = "You " + result + "! " + first + " beats " + second;
        if(humanScore===5) {
            div.textContent = "YOU WON THE GAME!";
        } else if(computerScore===5){
            div.textContent = "Computer Won";
        };   
        };


    
        
        
        buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click",() =>{
                if (humanScore<5 && computerScore<5){
                    computer = getComputerChoice();
                    playRound(button.id,computer);
                } else{
                    alert("Refresh to Start a New Game");
                };
                
            });
        });


}

playGame();

