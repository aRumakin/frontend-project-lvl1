import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function greatestDivisor(num1, num2) {
  const minimum = Math.min(num1, num2);
  for (let i = minimum; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  } return 1;
}

function gameQuestionAnswer() {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = String(greatestDivisor(num1, num2));

  return [question, answer];
}

export default function brainGcd() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
