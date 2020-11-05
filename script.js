let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (guess, target) => Math.abs(target - guess);

const compareGuesses = (humanGuess, computerGuess, target) => {
    let comGuessDif = getAbsoluteDistance(computerGuess, target);
    let humGuessDif = getAbsoluteDistance(humanGuess, target);

    return humGuessDif <= comGuessDif ? true : false;
};

const updateScore = result => {
    if (result === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}; 

const advanceRound = () => {
    currentRoundNumber++;
}

const choiceAlert = playerInput => {
    if (playerInput < 0 || playerInput > 9) {
        window.alert('Please enter a value between 0 or 9 (inclusive)');
        return false;
    }
    else {
        return true;
    }
}