let userChoice, computerChoice;
let userScore = 0;
let computerScore = 0;

const choices = {
    rock: {weakTo: "paper", strongTo: "scissors"},
    paper: {weakTo: "scissors", strongTo: "rock"},
    scissors: {weakTo: "rock", strongTo: "paper"}
}

const weapons = ["rock", "paper", "scissors"];

function computerPlay()
{
    return weapons[Math.floor(Math.random() * 3)];
}

let userScoreText = document.querySelector('.userScore');
let computerScoreText = document.querySelector('.computerScore');
let displayText = document.querySelector('.displayText');

function playRound(userPick)
{
    userChoice = userPick;
    computerChoice = computerPlay();

    if(choices[userChoice].weakTo == computerChoice)
    {
        computerScore++;
        computerScoreText.innerText = computerScore.toString();
        displayText.innerText = `Computer's ${computerChoice} beats your ${userChoice}!`;
        
    }
    else if(choices[computerChoice].weakTo == userChoice)
    {
        userScore++;
        userScoreText.innerText = userScore.toString();
        displayText.innerText = `Your ${userChoice} beats the computers ${computerChoice}!`;
    }
    else
    {
       displayText.innerText = `It's a tie!`;
    }
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName != "BUTTON")
        return;

    playRound(target.dataset.key); //Pass the buttons value (Rock Paper Scissors)
});


function game()
{

}