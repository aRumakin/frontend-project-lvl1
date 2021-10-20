import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const gameQuestionAnswer = () => {
  const randomNumber = getRandomNumber(1, 1000);
  const questionNumber = String(randomNumber);
  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};

export default function brainEven() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
