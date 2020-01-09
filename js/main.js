const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
    player: 0,
    computer: 0
};

// Play game (main function)
function play(e) {
    restart.style.display = "inline-block";
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
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

function showWinner(winner, computerChoice) {
    if (winner == "player") {
        // Incrase player score
        scoreboard.player++;
        // Show modal result
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else if (winner == "computer") {
        // Incrase computer score
        scoreboard.computer++;
        // Show modal result
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    } else {
        // Show modal result
        result.innerHTML = `
            <h1>It's A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
        `;
    }
    // Show score in modal
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = "block";
}

// Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
