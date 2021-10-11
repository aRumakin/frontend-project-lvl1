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
    return Math.floor(Math.random() * 1000);
}

function getRandomOperator() {
    const operators = ['+', '-', '*'];
    const index = Math.random() * 3;
    return operators[index];
}

export function expression() {
    let result = 0;
    for (let i = 1; i <= 3; i += 1) {
        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        const oparator = getRandomOperator();
        console.log(`Question: ${num1} ${operator} ${num2}`);
        const expAnswer = readlineSync.question('Your answer: ');
        switch (getRandomOperator){
            case 0: result = num1 + num2; 
            break;
            case 1: result = num1 - num2; 
            break;
            case 2: result = num1 * num2; 
            break;
        }
        if (expAnswer === result) {
            console.log('Correct!');
        } else {
            console.log(`${expAnswer} is wrong answer ;(. Correct answer was '175'.`);
            return console.log(`Let's try again, ${name}!`);
        }
    } return congrats;
}