import startGame from '../index.js';
import getRandomNumber from '../mathematics.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const randomNumber = getRandomNumber(1, 1000);
  const questionNumber = String(randomNumber);
  const isEven = (number) => (number % 2 === 0);
  const check = (number) => {
    const result = isEven(number) ? 'yes' : 'no';
    return result;
  };
  const answer = check(randomNumber);
  return [questionNumber, answer];
};

export default function brainEven() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
