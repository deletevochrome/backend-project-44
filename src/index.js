import readlineSync from 'readline-sync';

const count = 3;

const allGames = (desc, answer) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(desc);

  for (let i = 0; i < count; i += 1) {
    const [question, rightAnswer] = answer();
    console.log(`Question: ${question}`);
    const userResponse = readlineSync.question('Your answer: ');
    if (`${rightAnswer}` !== `${userResponse}`) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default allGames;
