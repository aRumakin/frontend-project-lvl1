/* eslint-disable max-len */
import newGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

function brainProgression(num1, num2, num3) {
  const progression = [];
  for (let h = 1; h <= num1; h += 1) {
    progression.push(num3 + (num2 * h));
  }
  return progression;
}
function shadowNum(num, coll) {
  let rightAnswer = '';
  rightAnswer = coll[num];
  // eslint-disable-next-line no-param-reassign
  coll[num] = '..';
  return rightAnswer;
}

function gameQuestionAnswer() {
  const lengthProgression = getRandomNumber(6) + 5;
  const delta = getRandomNumber(5) + 2;
  const firstNumber = getRandomNumber(40);
  const shadowNumber = getRandomNumber(lengthProgression);

  const question = String(brainProgression(lengthProgression, delta, firstNumber));

  const answer = String(shadowNum(shadowNumber, brainProgression(lengthProgression, delta, firstNumber)));

  return [question, answer];
}

export default function brainGcd() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
