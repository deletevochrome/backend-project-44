import allGames from '../index.js';

import randomInt from '../utils.js';

const descProg = 'What number is missing in the progression?';

const progressionLength = 10;

const questionGenerator = (step, first) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(first + i * step);
  }
  return result;
};

const gameProg = () => {
  const step = randomInt(1, 10);
  const first = randomInt(1, 45);
  const result = questionGenerator(step, first);
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
