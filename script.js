// create score variables
let humanScore = 0;
let computerScore = 0;
let rounds = 5; // number of rounds to play

// get human input
function getHumanChoice() {
    let humanInput = prompt('Select Rock, Paper, or Scissors.');
    humanInput = humanInput.toLowerCase();
    if (humanInput === 'rock' || humanInput === 'paper' || humanInput === 'scissors') {
        return humanInput;
    } else {
        console.log('Invalid choice, please try again.');
        return getHumanChoice(); // Retry if invalid input
    }
}

// create computer input
function getComputerInput() {
    let computerInput = Math.random() * 100;
    if (computerInput < 33) {
        return 'paper';
    } else if (computerInput < 66) {
        return 'scissors';
    } else {
        return 'rock';
    }
}

// play round, comparing human and computer inputs
function roundStart(humanInput = getHumanChoice(), computerInput = getComputerInput()) {
    console.log(humanInput);
    console.log(computerInput);
    if (
        (humanInput === 'rock' && computerInput === 'scissors') ||
        (humanInput === 'paper' && computerInput === 'rock') ||
        (humanInput === 'scissors' && computerInput === 'paper')
    ) {
        humanScore++;
        return `Winner! Your choice: ${humanInput}, beats the computer's choice: ${computerInput}. `;
    } else if (humanInput === computerInput) {
        humanScore++;
        computerScore++;
        return `Tie round! You both picked ${humanInput}...`;
    } else {
        computerScore++;
        return `You lost this one... ${computerInput} beats ${humanInput}.`;
    }
}

// repeat until enough rounds are played
function playGame() {
    for (let i = 0; i < rounds; i++) {
        console.log(roundStart()); // play a round and log the result
    }
    console.log(`Game over! Final Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}

playGame(); // start the game