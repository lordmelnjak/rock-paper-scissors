
let computerSelection = getComputerChoice()  //pozivam funkciju getComputerChoice na random generiranje
function getComputerChoice (){
    let choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() * choices.length)]; //vracam izbor racunala
}