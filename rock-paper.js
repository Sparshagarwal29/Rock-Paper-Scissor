let score = JSON.parse(localStorage.getItem('score')) ||{
    wins: 0,
    losses: 0,
    ties: 0
};
let isAutoPlaying = false;
let invervalID;
 
update();
function autoPlay(){
if(!isAutoPlaying) {
     invervalID = setInterval(function(){
            const playerMove = pickComputerMove();
            playerGame(playerMove);
        },1000);
        isAutoPlaying = true;
     } else {
        clearInterval(invervalID);
        isAutoPlaying = false; 
    }
}
function playerGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you lose';
        } else if (computerMove === 'scissor') {
            result = 'you win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissor') {
            result = 'you lose';
        }
    } else if (playerMove === 'scissor') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissor') {
            result = 'tie';
        }
    }

    if (result === 'you win') {
        score.wins += 1;
    } else if (result === 'you lose') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    update();

    document.querySelector('.js-result').
    innerHTML = result;
}
function update(){
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  computerMove = 'scissor';
}

return computerMove;
}
