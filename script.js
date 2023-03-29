'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 50;
document.querySelector('.guess').value;
*/
//default
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);

  // No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Numbers!');
  }

  // Winning
  else if (guess === secretNumber) {
    displayMessage('You guess!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //wen guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'To high!' : 'To low!';
      displayMessage(guess > secretNumber ? 'To high!' : 'To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   //To high number
//   else if (guess > secretNumber && guess >= 1 && guess <= 20) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'To high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //to low
//   else if (guess < secretNumber && guess >= 1 && guess <= 20) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'To low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess <= 0 || guess > 20)
//     document.querySelector('.message').textContent = 'Number out of range!';
// });

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('.guess').value = '';
});
