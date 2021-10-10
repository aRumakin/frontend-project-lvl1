#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const askName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${askName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function getRandomNumber() {
    return Math.abs(Math.random() * 1000);
  }
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const ans = readlineSync.question('Your answer is: ');
    if (number % 2 === 0) {
      if (ans === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`Let's try again, ${askName}!`);
        return console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      }
    } else if (number % 2 !== 0) {
      if (ans === 'no') {
        console.log('Correct!');
      } else {
        console.log(`Let's try again, ${askName}!`);
        return console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      }
    }
  } return console.log(`Congratulations, ${askName}!`);
};
