import allGames from '../index.js';

import randomInt from '../utils.js';

const descGcd = 'Find the greatest common divisor of given numbers.';

const gcdOfTwo = (first, second) => {
  if (second) {
    return gcdOfTwo(second, first % second);
  }
  return first;
};

const gameGcd = () => {
  const first = randomInt(1, 100);
  const second = randomInt(1, 100);
  const favorit = `${first} ${second}`;
  const vold = String(gcdOfTwo(first, second));
  return [favorit, vold];
};

const playGcd = () => {
  allGames(descGcd, gameGcd);
};

export default playGcd;
