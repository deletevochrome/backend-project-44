import allGames from '../index.js';

import randomInt from '../utils.js';

const descGcd = 'Find the greatest common divisor of given numbers.';

const gcdOfTwo = (a, b) => {
  if (b) {
    return gcdOfTwo(b, a % b);
  }
  return a;
};

const gameGcd = () => {
  const first = randomInt(1, 100);
  const second = randomInt(1, 100);
  const question = `${first} ${second}`;
  const rightAnswer = String(gcdOfTwo(first, second));
  return [question, rightAnswer];
};

const playGcd = () => {
  allGames(descGcd, gameGcd);
};

export default playGcd;
