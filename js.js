
const computerSelection = getComputerChoice()  //pozivam funkciju getComputerChoice na random generiranje
const playerSelection = 'Rock';
function getComputerChoice (){
    let choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]; //vracam izbor racunala
}

function playRound (playerSelection, computerSelection) {
    let result;
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        result = 'You win! Rock beats scissors!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        result = 'You loose! Paper beats rock!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        result = 'You win! Scissors beat paper!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        result = 'You loose! Rock beats Scissors!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        result = 'You win! Paper beats rock!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        result = 'You loose! Scissors beat paper!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        result = 'Tie';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        result = 'Tie';
    } else {
        result = 'Tie';
    }
    return result;
}

console.log(playRound(playerSelection, computerSelection));