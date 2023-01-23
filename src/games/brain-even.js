import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (num) => num % 2 === 0;

const prepareDataForRound = () => {
  const expression = getRandomNumber();
  const correctAnswer = isEven(expression) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', prepareDataForRound);
};
