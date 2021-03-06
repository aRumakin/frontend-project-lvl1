import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeNumber(number) {
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
}

const gameQuestionAnswer = () => {
  const number = getRandomNumber(1, 100);
  const questionNumber = `${number}`;
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return [questionNumber, answer];
};

export default function brainPrime() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
