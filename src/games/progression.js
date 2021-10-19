import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'What number is missing in the progression?';

function getProgression(lengthProgression, firstNumber, delta) {
  const coll = [];
  for (let h = 1; h <= lengthProgression; h += 1) {
    coll.push(firstNumber + (delta * h));
  }
  return coll;
}

function gameQuestionAnswer() {
  const lengthProgression = getRandomNumber(5, 10);
  const delta = getRandomNumber(3, 10);
  const firstNumber = getRandomNumber(0, 100);
  const shadowNumber = getRandomNumber(0, lengthProgression - 1);
  const progression = getProgression(lengthProgression, firstNumber, delta);
  const rightAnswer = progression[shadowNumber];
  progression[shadowNumber] = '..';

  const question = String(progression.join(' '));

  const answer = String(rightAnswer);

  return [question, answer];
}

export default function brainProgression() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
