import allGames from '../index.js';

import randomInt from '../utils.js';

const descCalc = 'What is the result of the expression?';

const mathSign = ['+', '-', '*'];

const calc = (numberOne, numberTwo, operator) => {
  switch (operator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return 'default';
  }
};

const gameCalc = () => {
  const numberOne = randomInt(1, 100);
  const numberTwo = randomInt(1, 100);
  const operator = mathSign[randomInt(0, (mathSign.length) - 1)];
  const question = `${numberOne} ${operator} ${numberTwo}`;
  const rightAnswer = String(calc(numberOne, numberTwo, operator));
  return [question, rightAnswer];
};

const playCalc = () => {
  allGames(descCalc, gameCalc);
};

export default playCalc;
