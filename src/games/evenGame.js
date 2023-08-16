import allGames from '../index.js';

import randomInt from '../utils.js';

const isEven = (number) => number % 2 === 0;

const descEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const question = randomInt(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playEven = () => {
  allGames(descEven, gameEven);
};

export default playEven;
