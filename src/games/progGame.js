import allGames from '../index.js';

import randomInt from '../utils.js';

const descProg = 'What number is missing in the progression?';

const progressionLength = 10;

const questionGenerator = () => {
  const result = [];
  const step = randomInt(1, 10);
  const first = randomInt(1, 45);
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(first + i * step); // i = 0, first = 1, i = 1(step = 3 for example)
    // second = 1 + 1 * 3 = 4, third is 1 + 2 * 3 = 7, and so on yay :)
  }
  return result;
};

const gameProg = () => {
  const result = questionGenerator();
  const hiddenIndex = randomInt(0, 9);
  const rightAnswer = result[hiddenIndex];
  result[hiddenIndex] = '..';
  const question = result.join(' ');
  return [question, rightAnswer];
};

const playProg = () => {
  allGames(descProg, gameProg);
};

export default playProg;
