import allGames from '../index.js';

import randomInt from '../utils.js';

const descPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2 || number === 3) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gamePrime = () => {
  const question = randomInt(2, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playPrime = () => {
  allGames(descPrime, gamePrime);
};

export default playPrime;
