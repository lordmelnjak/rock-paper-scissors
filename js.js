let result;
let win = 0;
let loose = 0;
function getComputerChoice (){
    let choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]; //vracam izbor racunala
}

function game () {  
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('What is your choice?').toLowerCase();
        const computerSelection = getComputerChoice();  //pozivam funkciju getComputerChoice na random generiranje
        getComputerChoice();
        playRound(playerSelection,computerSelection); 
    }
    if (win > loose) {
        console.log(`You win by score ${win}:${loose}!`);
    } else if (win < loose) {
        console.log(`Computer won by score ${loose}:${win}!`);
    } else {
        console.log(`It is a tie with result ${win}:${loose}!`);
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        result = 'You win! Rock beats scissors!';
        win = win + 1;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        result = 'You loose! Paper beats rock!';
        loose = loose + 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        result = 'You win! Scissors beat paper!';
        win = win + 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        result = 'You loose! Rock beats Scissors!';
        loose  = loose + 1;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        result = 'You win! Paper beats rock!';
        win = win + 1;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        result = 'You loose! Scissors beat paper!';
        loose = loose + 1;
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        result = 'Tie, both selected rock!';
    } else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        result = 'Tie, both selected paper!';
    } else {
        result = 'Tie, both selected scissors!';
    }
    console.log(result);
    return result;
}

game();

