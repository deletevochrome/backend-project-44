#!/usr/bin/env node

import allGames from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const descEven = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const question = Math.floor(Math.random() * 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const playEven = () => {
  allGames(descEven, gameEven);
};

playEven();
