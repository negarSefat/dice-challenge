'use strict';

const startBtn = document.querySelector('.startBtn');
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const player1_sum = document.querySelector('.player1-sum');
const player2_sum = document.querySelector('.player2-sum');
const winner = document.querySelector('.winner');

function throwDice() {
  let results = [];
  let num = [];
  for (let i = 1; i <= 10; i++) {
    num[i] = Math.floor(Math.random() * 6) + 1;
    results.push(num[i]);
  }
  return results;
}

function sum(res) {
  let sum = 0;
  for (let i = 0; i < res.length; i++) {
    sum += res[i];
  }
  return sum;
}

startBtn.addEventListener('click', () => {
  const firstPlayer = throwDice();
  const secondPlayer = throwDice();

  result1.textContent = firstPlayer;
  result2.textContent = secondPlayer;
  const sum1 = sum(firstPlayer);
  const sum2 = sum(secondPlayer);

  player1_sum.innerHTML = `sum = ${sum1}`;
  player2_sum.innerHTML = `sum = ${sum2}`;

  player1_sum.style.color = 'rgb(126, 32, 32)';
  player1_sum.style.borderBottom = '2px solid rgba(13, 66, 83, 1)';
  player2_sum.style.color = 'rgb(126, 32, 32)';
  player2_sum.style.borderBottom = '2px solid rgba(13, 66, 83, 1)';

  winner.innerHTML =
    sum1 > sum2 ? '✅ player 1 is the winner' : '✅ player 2 is the winner';
  winner.style.color = 'darkBlue';
  winner.style.fontSize = '24px';
});
