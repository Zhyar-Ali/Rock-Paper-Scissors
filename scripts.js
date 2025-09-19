let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    return choice;
}

function getHumanChoice(){
    let choice = prompt().toLowerCase();
    switch (choice){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}

function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case 1:
            if (computerChoice==1){
                console.log("Draw");
            }else if (computerChoice==2){
                console.log("you lose. Paper beats rock!");
                computerScore++;
            }else {
                console.log("you win. Rock beats scissors!");
                humanScore++;
            }
            break;
        case 2:
            if (computerChoice==1){
                console.log("You win. Paper beats rock!");
                humanScore++;
            }else if (computerChoice==2){
                console.log("Draw");
            }else {
                console.log("you lose. Scissors beats paper!");
                computerScore++;
            }
            break;
        case 3:
            if (computerChoice==1){
                console.log("you lose. Rock beats scissors!");
                computerScore++;
            }else if (computerChoice==2){
                console.log("you win. Scissors beats paper!");
                humanScore++;
            }else {
                console.log("Draw");
            }
            break;
    }
}

function playGame(){

    for (let i=1; i<=5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Player's Score: ${humanScore}, Computer's Score: ${computerScore}`);
    }
}
playGame();