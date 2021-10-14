import newGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameQuestionAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 1000 + 1);
  const questionNumber = `${randomNumber}`;
  const answer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  return [questionNumber, answer];
};

export default function brainEven() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
