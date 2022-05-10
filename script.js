let userChoice, computerChoice;
let userScore = 0;
let computerScore = 0;

const choices = {
    rock: {weakTo: "paper", strongTo: "scissors"},
    paper: {weakTo: "scissors", strongTo: "rock"},
    scissors: {weakTo: "rock", strongTo: "paper"}
}

const weapons = ["rock", "paper", "scissors"];

function userSelection()
{
    let tmp = prompt("Rock, Paper or Scissors?: ").toLowerCase();

     return answerValidation(tmp);
}

function computerSelection()
{
    return weapons[Math.floor(Math.random() * 3)];
}

function answerValidation(userInput)
{
    while(!weapons.includes(userInput))
    {
        userInput = prompt("Nice try bozo... ROCK PAPER OR SCISSORS?: ").toLowerCase();
    }
    
    return userInput;
}

function playRound(userPick, computerPick)
{
    userChoice = userSelection();
    computerChoice = computerSelection();

    if(choices[userChoice].weakTo == computerChoice)
    {
        computerScore++;
        console.log("User lost, " + computerChoice + " beats " + userChoice);

    }
    else if(choices[computerChoice].weakTo == userChoice)
    {
        userScore++;
        console.log("Computer lost, " + userChoice + " beats " + computerChoice);
    }
    else
    {
        console.log("It's a tie!");
    }
}


function game()
{
    for(let i = 0; i < 5; i++)
    {
        playRound();
        console.log("Score: Player - " + userScore + " / Computer - " + computerScore);
    }
}

game();