import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

function getGreatestDivisor(number1, number2) {
  const minimum = Math.min(number1, number2);
  for (let i = minimum; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  } return 1;
}

function gameQuestionAnswer() {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getGreatestDivisor(number1, number2));

  return [question, answer];
}

export default function brainGcd() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
