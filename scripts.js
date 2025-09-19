let humanScore=0;
let computerScore=0;

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1;
    switch (choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice(){
    return (prompt().toLowerCase());
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Draw!");
    }else if ((humanChoice=="rock" && computerChoice=="scissors") || (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="scissors" && computerChoice=="paper")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }else{
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
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