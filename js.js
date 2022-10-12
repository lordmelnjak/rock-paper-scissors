
const computerSelection = getComputerChoice();  //pozivam funkciju getComputerChoice na random generiranje
function getComputerChoice (){
    let choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]; //vracam izbor racunala
}

function game () {  
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('What is your choice?').toLowerCase();
        getComputerChoice();
        playRound();
        console.log(playRound(playerSelection, computerSelection));
    }
}

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        result = 'You win! Rock beats scissors!';
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        result = 'You loose! Paper beats rock!';
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        result = 'You win! Scissors beat paper!';
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        result = 'You loose! Rock beats Scissors!';
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        result = 'You win! Paper beats rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        result = 'You loose! Scissors beat paper!';
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        result = 'Tie';
    } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        result = 'Tie';
    } else {
        result = 'Tie';
    }
    return result;
}

game();

