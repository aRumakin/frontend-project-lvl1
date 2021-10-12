import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

export function helloName() {
  console.log(`Hello, ${name}!`);
}

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

export function greatestDivisor() {
  for (let i = 1; i <= 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    console.log(`Question: ${num1} ${num2}`);
    let result = 0;
    const coll1 = [];
    const coll2 = [];
    for (let j = 1; j <= num1; j += 1) {
      if (num1 % j === 0) {
        coll1.push(j);
      }
    }
    for (let k = 1; k <= num2; k += 1) {
      if (num2 % k === 0) {
        coll2.push(k);
      }
    }
    for (let n = coll1.length - 1; n >= 0;) {
      for (let m = coll2.length - 1; m >= 0;) {
        if (coll1[n] < coll2[m]) {
          m -= 1;
        } else if (coll1[n] > coll2[m]) {
          n -= 1;
        } else if (coll1[n] === coll2[m]) {
          result = coll1[n];
          n = -1;
          m = -1;
        }
      }
    }
    const divAnswer = readlineSync.question('Your answer: ');

    if (parseInt(divAnswer, 10) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${divAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  } return congrats();
}
