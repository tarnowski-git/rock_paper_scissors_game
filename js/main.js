const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0
};

// Play game
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(playerChoice, computerChoice, winner);
}

// Get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if (rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get game winner
function getWinner(p, c) {
    if (p == c) {
        return "draw";
    } else if (p == "rock" && c == "paper") {
        return "computer";
    } else if (p == "rock" && c == "scissors") {
        return "player";
    } else if (p == "paper" && c == "scissors") {
        return "computer";
    } else if (p == "paper" && c == "rock") {
        return "player";
    } else if (p == "scissors" && c == "rock") {
        return "computer";
    } else if (p == "scissors" && c == "paper") {
        return "player";
    } else {
        console.log("game logic error");
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
