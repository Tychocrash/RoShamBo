

function getComputerchoice() {
    let guess = Math.floor(Math.random() * 3) + 1;
    if (guess === 1) {
        compGuess = 'rock'
    } else if (guess === 2) {
        compGuess = 'paper'
    } else if (guess === 3) {
        compGuess = 'scissors'
    }
    return compGuess
}

console.log(getComputerchoice())