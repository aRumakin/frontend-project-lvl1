import newGame from '../index.js';

const gameQuestion = 'What is the result of the expression?';

function getRandomNumber(n) {
  return Math.floor(Math.random() * n + 1);
}

function getExpression(num1, num2, operator) {
  let result = 0;
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
  }
  return [result];
}

const gameQuestionAnswer = () => {
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const operator = getRandomNumber(3);

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getExpression(num1, num2, operator));

  return [question, answer];
};

export default function brainCalc() {
  return newGame(gameQuestion, gameQuestionAnswer);
}
