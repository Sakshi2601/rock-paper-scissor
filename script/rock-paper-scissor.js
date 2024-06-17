let score = JSON.parse(localStorage.getItem('score')) || 
{ 
  wins: 0, 
  losses:0, 
  ties:0 
}
updateScoreElement();

function playGame(player) {
  const computer = pickMove();
  let result = '';

  if (player === computer) {
    result = 'It\'s Tie.';
  }
  else if ((player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || (player === 'scissor' && computer === 'paper')) {
    result = 'You Win!';
  }
  else {
    result = 'You Loss!';
  }

  if (result ==='You Win!') {
    score.wins += 1;
  } else if (result ==='You loss!') {
    score.losses += 1;
  } else if (result ==='It\'s Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = `Result: ${result}`;
  document.querySelector('.js-moves').innerHTML = `You : <img src="./images/${player}.jpg" alt="player" class="move-icon"> Computer : <img src="./images/${computer}.jpg" alt="computer" class="move-icon">`;
}

function updateScoreElement() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickMove() {
  const random = Math.random();
  let computer = '';
  if (random >= 0 && random<1/3)
    computer = 'rock';
  else if (random >= 1/3 && random<2/3)
    computer = 'paper';
  else if (random >= 2/3 && random<1)
    computer = 'scissor';
  return computer;
}
