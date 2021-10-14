import newGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

// eslint-disable-next-line consistent-return
function greatestDivisor(num1, num2) {
  const coll1 = [];
  const coll2 = [];
  for (let j = 1; j <= num1; j += 1) {
    if (num1 % j === 0) {
      coll1.push(j);
    }
  }
  for (let k = 1; k <= num2; k += 1) {
    if (num2 % k === 0) {
      coll2.push(k);
    }
  }
  for (let n = coll1.length - 1; n >= 0;) {
    for (let m = coll2.length - 1; m >= 0;) {
      if (coll1[n] < coll2[m]) {
        m -= 1;
      } else if (coll1[n] > coll2[m]) {
        n -= 1;
      } else if (coll1[n] === coll2[m]) {
        return coll1[n];
      }
    }
  }
}

function gameQuestionAnswer() {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);

  const question = `${num1} ${num2}`;
  const answer = String(greatestDivisor(num1, num2));

  return [question, answer];
}

export default function brainGcd() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
