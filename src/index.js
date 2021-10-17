import readlineSync from 'readline-sync';

const startGame = (gameQuestion, gameQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameQuestion}`);
  const countRound = 3;
  for (let i = 1; i <= countRound; i += 1) {
    const [question, answer] = gameQuestionAnswer();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
