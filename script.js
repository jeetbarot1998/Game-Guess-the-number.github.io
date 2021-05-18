'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function score_update(sc) {
  document.querySelector('.score').textContent = sc;
}

function click() {
  {
    var input_val = Number(document.querySelector('.guess').value);
    console.log(input_val, secretNumber);

    if (!input_val) {
      document.querySelector('.message').textContent = 'Abe Number dalna!!';
    } else if (input_val !== secretNumber) {
      if (input_val > secretNumber) {
        document.querySelector('.message').textContent = 'Zyada Ho Gya Boss!!';
        score--;
        score_update(score);
      } else if (input_val < secretNumber) {
        document.querySelector('.message').textContent = 'Badhao Bhai Thoda!!';
        score--;
        score_update(score);
      }
    } else if (input_val === secretNumber) {
      document.querySelector('.message').textContent =
        'Abhi Majja Aega Na Bidu!!!!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
    }
  }
}

document.querySelector('.check').addEventListener('click', click);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    click();
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'Black';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
