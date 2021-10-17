import startGame from '../index.js';
import getRandomNumber from '../mathematics.js';

const gameQuestion = 'What is the result of the expression?';

function getExpression(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: throw new Error(`operator ${operator} is not supported`);
  }
  return [result];
}

const gameQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorNum = getRandomNumber(0, operators.length);
  const operator = operators[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getExpression(num1, num2, operator));

  return [question, answer];
};

export default function brainCalc() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
