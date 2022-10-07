
let computerSelection = getComputerChoice()
function getComputerChoice (){
    let choices = ['Rock','Paper','Scissors'];
    return choice = choices[Math.floor(Math.random() * choices.length)];
}