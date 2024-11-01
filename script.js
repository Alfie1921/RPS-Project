// create score variables
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input')
let humanDisplay = document.getElementById("humanDisplay")
let computerDisplay = document.getElementById("computerDisplay")
let result = document.getElementById("result")
let computerSelection = document.getElementById("computerSelection")
let humanSelection = document.getElementById("humanSelection")


computerDisplay.textContent = `Me: ${computerScore}`
humanDisplay.textContent = `You: ${humanScore}`



// create computer input
function getComputerInput() {
    let computerInput = Math.random() * 100;
    if (computerInput < 33) {
        return 'Paper';
    } else if (computerInput < 66) {
        return 'Scissors';
    } else {
        return 'Rock';
    }
}

// play round, comparing human and computer inputs
function roundStart(humanInput) {
    computerInput = getComputerInput();
    humanSelection.textContent = `Your Selection: ${humanInput}`;
    computerSelection.textContent = `My Selection: ${computerInput}`;
    if (
        (humanInput === 'Rock' && computerInput === 'Scissors') ||
        (humanInput === 'Paper' && computerInput === 'Rock') ||
        (humanInput === 'Scissors' && computerInput === 'Paper')
    ) {
        humanScore++;
        humanDisplay.textContent = `You: ${humanScore}`

        if(humanScore === 5) {
            result.textContent = ('Congrats! the game is yours.');
            disabled()
        }
    }
    else if (humanInput === computerInput) {
    } 
    else {
        computerScore++;
        computerDisplay.textContent = `Me: ${computerScore}`
        
        if(computerScore === 5) {
            result.textContent = ('ooooohh... this game goes to me!');
            disabled()
        }
    }
}

buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        roundStart(button.value)
    })
})

function disabled() {
    buttons.forEach(function(button) {
        button.disabled = true
    })
}