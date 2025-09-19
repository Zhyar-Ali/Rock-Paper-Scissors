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
                console.log("you lose");
                computerScore++;
            }else {
                console.log("you win");
                humanScore++;
            }
            break;
        case 2:
            if (computerChoice==1){
                console.log("You win");
                humanScore++;
            }else if (computerChoice==2){
                console.log("Draw");
            }else {
                console.log("you lose");
                computerScore++;
            }
            break;
        case 3:
            if (computerChoice==1){
                console.log("you lose");
                computerScore++;
            }else if (computerChoice==2){
                console.log("you win");
                humanScore++;
            }else {
                console.log("Draw");
            }
            break;
    }
}