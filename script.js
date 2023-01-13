console.log(game());

function getComputerChoice(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomOption = Math.round((Math.random()*2));
    return options[randomOption];
}

function playRound(playerSelection, computerSelection){
    let playerSelectionFormatted = playerSelection.toLowerCase();
    let playerSelectionFinal = '';
    if(playerSelectionFormatted[0] == 'r'){
        playerSelectionFinal = 'Rock';
    }
    if(playerSelectionFormatted[0] == 'p'){
        playerSelectionFinal = 'Paper';
    }
    if(playerSelectionFormatted[0] == 's'){
        playerSelectionFinal = 'Scissors'
    }

    if(playerSelectionFinal === computerSelection){
        //console.log(`It's a draw! both players chose ${computerSelection}!`);
        return `It's a draw! both players chose ${computerSelection}`;
    }

    if(computerSelection == 'Rock' && playerSelectionFinal == 'Paper'){
        //console.log(`You Win! ${playerSelectionFinal} beats ${computerSelection}`);
        return `You Win! ${playerSelectionFinal} beats ${computerSelection}`;
    }
    if(computerSelection == 'Rock' && playerSelectionFinal == 'Scissors'){
        //console.log(`You Lose! ${computerSelection} beats ${playerSelectionFinal}`);
        return `You Lose! ${computerSelection} beats ${playerSelectionFinal}`;
    }
    if(computerSelection == 'Paper' && playerSelectionFinal == 'Scissors'){
        //console.log(`You Win! ${playerSelectionFinal} beats ${computerSelection}`);
        return `You Win! ${playerSelectionFinal} beats ${computerSelection}`;
    }
    if(computerSelection == 'Paper' && playerSelectionFinal == 'Rock'){
        return `You Lose! ${computerSelection} beats ${playerSelectionFinal}`;
    }
    if(computerSelection == 'Scissors' && playerSelectionFinal == 'Paper'){
        //console.log(`You Lose! ${computerSelection} beats ${playerSelectionFinal}`);
        return `You Lose! ${computerSelection} beats ${playerSelectionFinal}`;
    }
    if(computerSelection == 'Scissors' && playerSelectionFinal == 'Rock'){
        //console.log(`You Win! ${playerSelectionFinal} beats ${computerSelection}`);
        return `You Win! ${playerSelectionFinal} beats ${computerSelection}`;
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i ++){
        let move = window.prompt('Enter your move');
        while(move.toLowerCase() !== 'rock' && move.toLowerCase() !== 'paper' && move.toLowerCase() !== 'scissors'){
            move = window.prompt('Enter a valid move');
        }
        let result = playRound(move, getComputerChoice());
        console.log(result);
        if(result[4] == 'W'){
            playerScore++;
        }
        if(result[4] == 'L'){
            computerScore++;
        }
    }
    if(computerScore > playerScore){
        console.log(`You Lost! Computer ${computerScore}, You ${playerScore}`);
    }
    else{
        console.log(`You Won! Computer ${computerScore}, You ${playerScore}`);
    }
}