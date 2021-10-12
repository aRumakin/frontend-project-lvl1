import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');

export function helloName() {
  console.log(`Hello, ${name}!`);
}

function getRandomNumber(a = 100) {
  return Math.floor(Math.random() * a);
}

const congrats = () => {
  console.log(`Congratulations, ${name}!`);
};

const tryAgain = () => {
  console.log(`Let's try again, ${name}!`);
};

export function cycle() {
  for (let i = 1; i <= 3; i += 1) {
    const progression = [];
    let rightAnswer = '';
    const lengthProgression = getRandomNumber(6) + 5;
    const delta = getRandomNumber(5) + 2;
    const firstNumber = getRandomNumber(40);
    const shadowNumber = getRandomNumber(lengthProgression);
    for (let h = 1; h <= lengthProgression; h += 1) {
      progression.push(firstNumber + (delta * h));
    }
    rightAnswer = progression[shadowNumber];
    progression[shadowNumber] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const progressionAnswer = readlineSync.question('Your answer: ');
    if (parseInt(progressionAnswer, 10) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${progressionAnswer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'`);
      return tryAgain();
    }
  } return congrats();
}

export function isPrime() {
  for (let i = 1; i <= 3; i += 1) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const isPrimeNumber = getRandomNumber(10000);
    console.log(`Question: ${isPrimeNumber}`);
    const isPrimeAnswer = readlineSync.question('Your answer: ');
    let result = '';
    for (let j = 2; j <= isPrimeNumber / 2; j += 1) {
      if (isPrimeNumber % j !== 0) {
        result = true;
      } else {
        result = false;
        break;
      }
    }
    if (isPrimeAnswer === 'yes' && result === true) {
      console.log('Correct!');
    } else if (isPrimeAnswer === 'yes' && result === false) {
      console.log(`'${isPrimeAnswer}' is a wrong answer ;(. Correct answer was 'no'.`);
      return tryAgain();
    } else if (isPrimeAnswer === 'no' && result === false) {
      console.log('Correct!');
    } else if (isPrimeAnswer === 'no' && result === true) {
      console.log(`'${isPrimeAnswer}' is a wrong answer ;(. Correct answer was 'yes'.`);
      return tryAgain();
    } else {
      return console.log('Type correct answer! >(');
    }
  } return congrats();
}
