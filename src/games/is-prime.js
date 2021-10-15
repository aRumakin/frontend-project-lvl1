import newGame from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrimeNumber(num1) {
  let result = '';
  for (let j = 2; j <= num1 / 2; j += 1) {
    if (num1 % j !== 0) {
      result = 'yes';
    } else {
      result = 'no';
      break;
    }
  } return result;
}

const gameQuestionAnswer = () => {
  const number = Math.floor(Math.random() * 10000 + 1);
  const questionNumber = `${number}`;
  const answer = String(isPrimeNumber(number));
  return [questionNumber, answer];
};

export default function brainPrime() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
