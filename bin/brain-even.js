#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer"no".');

  const getRandomNumber = () => Math.abs(Math.random() * 1000);
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer is: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      return console.log(`Let's try again, ${name}!`);
    }
  } return console.log(`Congratulations, ${name}!`);
};
