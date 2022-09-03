

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

function playRound(playerSelection, computerSelection) {
    let pSelect = playerSelection.toLowerCase()
    let cSelect = computerSelection
    let result
    if (pSelect === cSelect) {
        result = null
    } else if ((pSelect === 'rock' && cSelect === 'scissors') || (pSelect === 'scissors' && cSelect === 'paper') || (pSelect === 'paper' && cSelect === 'rock')) {
        result = 1
    } else {
        result = 0
    }
    return result
}


function game() {
    pWin = 0
    cWin = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt('Rock, paper, or scissors?')
        const computerSelection = getComputerchoice()
        result = playRound(playerSelection, computerSelection)
        console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`)
        if (result === 1) {
            pWin++
        }
        if (result === 0) {
            cWin++
        }
        if (result === null) {
            i--
        }
        console.log(`You: ${pWin} Computer: ${cWin}`)
    }
    if (pWin >= 3) {
        console.log('You won!!')
    } else {
        console.log('You lost!')
    }

}

game()