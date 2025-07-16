let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDifference = Math.abs(targetNumber - humanGuess );
  const computerDifference = Math.abs(targetNumber - computerGuess);
  return humanDifference <= computerDifference ;
}



console.log(generateTarget());