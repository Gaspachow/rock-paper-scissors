//Global variables
let computerSelection;
let playerSelection;
let response;

//Choice for the computer with an equal 1/3 chance for each decision
function computerPlay() {
    let compRoll = Math.random();

    if (compRoll <= (1/3)) {
        console.log('Computer throws Rock!');
        computerSelection = "ROCK";
        
    } else if (compRoll <= (2/3)) {
        console.log('Computer throws Paper!');
        computerSelection = "PAPER";
    } else {
        console.log('Computer throws Scissors!');
        computerSelection = "SCISSORS";
    }
}

//Prompt for player's choice. Made to be case insensitive and forbid user from
//entering a wrong value
function playerPlay() {
    playerSelection = prompt("rock paper or scissors?").toUpperCase();

    if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") {
        alert('Please enter "Rock", "Paper" or "Scissors"');
        playerPlay();
    }
}

//One round rock paper scissor function 
function oneRound() {
    playerPlay();
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

    return response;

}

//five rounds function 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let score;
    for (i=0;i<5;i++){
        console.log(`----------------ROUND ${i + 1}-----------------`);
        oneRound();
        let result = playerSelection + computerSelection;

        if (result == "ROCKSCISSORS" || result == "SCISSORSPAPER" || result == "PAPERROCK") {
            ++playerScore;
        } else if (result == "ROCKPAPER" || result == "SCISSORSROCK" || result == "PAPERSCISSORS") {
            ++computerScore;
        }
        console.log(response);
        if (i<4) {
            console.log(`Your current score is: ${playerScore} while computer's score is: ${computerScore}`);
        }
    } 

    if (playerScore>computerScore) {
        score = ("Not today, Skynet... You have WON with " + 
                playerScore + " points! Against a pathetic score of " + computerScore + 
                " points from the machine.");
    } else if (playerScore<computerScore) {
        score = ("Crap... Maybe next time. You have lost with " + playerScore + " points against " + 
        computerScore + " points scored by the machine.");
    } else {
        score = "Aaand the crowd goes mild... It's a draw with " + playerScore + " points each.";
    }
    console.log(`----------------FINAL RESULT-----------------`)
    return score;
}