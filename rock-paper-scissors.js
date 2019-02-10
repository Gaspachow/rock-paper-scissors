//Global variables
let computerSelection;
let playerSelection;
let response;
let roundInfo = document.querySelector('.roundInfo');
let compInfo = document.querySelector('.computerInfo');
let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerScoreDisplay = document.querySelector('.playerScore');
let computerScoreDisplay = document.querySelector('.computerScore');

//Choice for the computer with an equal 1/3 chance for each decision
function computerPlay() {
    let compRoll = Math.floor(Math.random()*3);
    if (compRoll == (0)) {
        compInfo.textContent = 'Computer throws Rock!';
        computerSelection = "ROCK";
        
    } else if (compRoll == (1)) {
        compInfo.textContent = 'Computer throws Paper!';
        computerSelection = "PAPER";
    } else {
        compInfo.textContent = 'Computer throws Scissors!';
        computerSelection = "SCISSORS";
    }

   
}

//One round rock paper scissor function 
function oneRound() {
    computerPlay();

    if (playerSelection == computerSelection) {
        response = "It's a draw!"
    } else {
        let rockscissors = "Rock beats scissors!";
        let rockpaper = "Paper beats Rock!";
        let paperscissors = "Scissors beats Paper!";
        let lose = "You lose! ";
        let win = "You win! ";

        switch (playerSelection + computerSelection) {
            case "ROCKSCISSORS":
                response = win + rockscissors;
                break;
            case "ROCKPAPER":
                response = lose + rockpaper;
                break;
            case "SCISSORSROCK":
                response = lose + rockscissors;
                break;
            case "SCISSORSPAPER":
                response = win + paperscissors;
                break;
            case "PAPERROCK":
                response = win + rockpaper;
                break;
            case "PAPERSCISSORS":
                response = lose + paperscissors;
                break;
            default:
            response = "You do not know the way.";
            break;


        }

    }
    roundInfo.textContent = response;
    return response;

}

//five rounds function 
function game() {

    oneRound();
    result = playerSelection + computerSelection;
    round++;
    if (result == "ROCKSCISSORS" || result == "SCISSORSPAPER" || result == "PAPERROCK") {
        ++playerScore;
        playerScoreDisplay.textContent = playerScore;
    } else if (result == "ROCKPAPER" || result == "SCISSORSROCK" || result == "PAPERSCISSORS") {
        ++computerScore;
        computerScoreDisplay.textContent = computerScore;
    }

    if (round==5) {
    if (playerScore>computerScore) {
            finalScore = ("Not today, Skynet... You have WON with " + 
                    playerScore + " points! Against a pathetic final score of " + computerScore + 
                    " points from the machine.");
        } else if (playerScore<computerScore) {
            finalScore = ("Crap... Maybe next time. You have lost with " + playerScore + " points against " + 
                    computerScore + " points scored by the machine.");
        } else {
            finalScore = "Aaand the crowd goes mild... It's a draw with " + playerScore +
                    " points each.";
        }
        alert(finalScore);
        round = 0;
        playerScore = 0;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
        playerScoreDisplay.textContent = playerScore;
        return finalScore;
    }
}


//Button event listeners

const buttons = document.querySelector('.buttons');


buttons.addEventListener('click', function(e){
    console.log(e.target.className);
    switch(e.target.className){
        case 'ROCK':
         playerSelection = 'ROCK';
        break;

        case 'PAPER':
         playerSelection = 'PAPER';
        break;

        case 'SCISSORS':
         playerSelection = 'SCISSORS';
        break;

        default:
        console.log("There's a mistake somewhere, pal...");
    }
});

buttons.addEventListener('click', () => game());
