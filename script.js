function getComputerChoice(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let randomOption = Math.round((Math.random()*2));
    return options[randomOption];
}

let currentScore = {
    computer: 0,
    player: 0,
    round: 1
}

function handleOutcome(outcome){

    let result = document.querySelector('#results');
    let score = document.querySelector('#score');

    if(outcome[4] == 'W'){
        currentScore = {
            computer: currentScore.computer,
            player: currentScore.player += 1,
            round: currentScore.round
        }
    }
    if(outcome[4] == 'L'){
        currentScore = {
            computer: currentScore.computer +=1,
            player: currentScore.player,
            round: currentScore.round
        }
    }
    else{
        currentScore = {
            computer: currentScore.computer,
            player: currentScore.player,
            round: currentScore.round
        }
    }

    currentScore = {
        computer: currentScore.computer,
        player: currentScore.player,
        round: currentScore.round +=1
    };

    if(currentScore.round > 5){
        if(currentScore.computer < currentScore.player){
            result.textContent = `Congratulations, you won!`;
        }
        if(currentScore.computer > currentScore.player){
            result.textContent = `You Lost!`;
        }
        else{
            result.textContent = `It's a Draw!`;
        }
        score.textContent = `Round: 5, Computer: ${currentScore.computer}, You: ${currentScore.player}`;
        rock.setAttribute('disabled', true);
        paper.setAttribute('disabled', true);
        scissors.setAttribute('disabled', true);
    }
    else{
        result.textContent = outcome;
        score.textContent = `Next Round: ${currentScore.round}, Computer: ${currentScore.computer}, You: ${currentScore.player}`;
    }
}

function playRound(playerSelection){

    let computerSelection = getComputerChoice();

    if(playerSelection === computerSelection){
        handleOutcome(`It's a draw! both players chose ${computerSelection}`);
    }
    if(computerSelection == 'Rock' && playerSelection == 'Paper'){
        handleOutcome(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    if(computerSelection == 'Rock' && playerSelection == 'Scissors'){
        handleOutcome(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(computerSelection == 'Paper' && playerSelection == 'Scissors'){
        handleOutcome(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
    if(computerSelection == 'Paper' && playerSelection == 'Rock'){
        handleOutcome(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(computerSelection == 'Scissors' && playerSelection == 'Paper'){
        handleOutcome(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
    if(computerSelection == 'Scissors' && playerSelection == 'Rock'){
        handleOutcome(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => playRound('Rock'));
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => playRound('Paper'));
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => playRound('Scissors'));