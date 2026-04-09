const result = ["rock", "paper", "scissors"];
let humanScore = 0;
let CompScore = 0;

function getCompChoice() {
    let index = Math.floor(Math.random() * result.length);
    return result[index];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors");
    while (true) {
        humanChoice = humanChoice.toLowerCase();

        if (
            humanChoice === "rock" ||
            humanChoice === "paper" ||
            humanChoice === "scissors"
        ) {
            return humanChoice;
        }

        humanChoice = prompt("Invalid choice! Enter rock, paper or scissors:");
    }
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        return "Draw";
    } else if (humanChoice === "rock" && compChoice === "scissors") {
        humanScore++;
        return "You Win";
    } else if (humanChoice === "paper" && compChoice === "rock") {
        humanScore++;
        return "You Win";
    } else if (humanChoice === "scissors" && compChoice === "paper") {
        humanScore++;
        return "You Win"
    } else {
        CompScore++;
        return "You Lose"
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getCompChoice();

        let resultFinal = playRound(humanSelection, computerSelection);

        console.log(humanSelection, computerSelection);
        console.log(humanScore, CompScore);
        console.log(resultFinal);
    }
}

playGame();