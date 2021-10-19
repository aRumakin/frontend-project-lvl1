import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'What is the result of the expression?';

function getExpression(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
}

const gameQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorNum = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getExpression(num1, num2, operator));

  return [question, answer];
};

export default function brainCalc() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
