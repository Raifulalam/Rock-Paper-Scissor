let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    draws: 0
};

updateScore();




function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        }
        else if (computerMove === 'Paper') {
            result = 'You win';
        }
        else if (computerMove === 'Scissor') {
            result = 'Tie';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        }
        else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove === 'Scissor') {
            result = 'You lose';
        }
    }

    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You lose';
        }
        else if (computerMove === 'Scissor') {
            result = 'You win';
        }
    }
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.draws += 1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector(`.js-result`).innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You
<img src="image/${playerMove}-emoji.png" class="move-icon" alt="">
<img src="image/${computerMove}-emoji.png" class="move-icon" alt="">
Computer`;


}
function updateScore() {
    document.querySelector('.js-score').innerHTML = `wins:${score.wins}, losses: ${score.losses}, Ties ${score.draws}`;

}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < (1 / 3)) {
        computerMove = 'Rock';
    }
    else if (randomNumber > (1 / 3) && randomNumber < (2 / 3)) {
        computerMove = 'Paper';
    }
    else if (randomNumber > (2 / 3) && randomNumber < 1) {
        computerMove = 'Scissor';
    }
    return computerMove;
}