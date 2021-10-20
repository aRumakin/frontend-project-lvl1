import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameQuestion = 'What is the result of the expression?';

function getExpression(number1, number2, operator) {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`operation ${operator} is not supported`);
  }
}

const gameQuestionAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operators = ['+', '-', '*'];
  const operatorNum = getRandomNumber(0, operators.length - 1);
  const operator = operators[operatorNum];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(getExpression(number1, number2, operator));

  return [question, answer];
};

export default function brainCalc() {
  return startGame(gameQuestion, gameQuestionAnswer);
}
