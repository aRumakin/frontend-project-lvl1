/* eslint-disable max-len */

import newGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

function gameQuestionAnswer() {
  const lengthProgression = getRandomNumber(6) + 5;
  const delta = getRandomNumber(5) + 2;
  const firstNumber = getRandomNumber(40);
  const shadowNumber = getRandomNumber(lengthProgression);
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

export default function brainGcd() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
