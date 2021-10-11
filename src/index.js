import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

export const helloName = () => {
  console.log(`Hello, ${name}!`);
};

const congrats = () => {
  console.log(`Congratulations, ${name}!`);
};

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function getRandomOperator() {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return operators[index];
}

export function expression() {
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    console.log(`Question: ${num1} ${operator} ${num2}`);
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
    const expAnswer = readlineSync.question('Your answer: ');

    if (parseInt(expAnswer, 10) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${expAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  } return congrats();
}
