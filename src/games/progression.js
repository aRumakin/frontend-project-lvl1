import startGame from '../index.js';
import getRandomNumber from '../mathematics.js';

const gameQuestion = 'What number is missing in the progression?';

function gameQuestionAnswer() {
  const lengthProgression = getRandomNumber(5, 10);
  const delta = getRandomNumber(3, 10);
  const firstNumber = getRandomNumber(0, 100);
  const shadowNumber = getRandomNumber(0, lengthProgression);
  let rightAnswer = '';
  const progression = [];
  for (let h = 1; h <= lengthProgression; h += 1) {
    progression.push(firstNumber + (delta * h));
  }
  rightAnswer = progression[shadowNumber];
  progression[shadowNumber] = '..';

  const question = String(progression.join(' '));

  const answer = String(rightAnswer);

  return [question, answer];
}

export default function brainProgression() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
