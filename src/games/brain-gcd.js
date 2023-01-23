import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getGameAnswer = (number1, number2) => {
  let correctAnswer = 0;

  for (let i = number1; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i;
      break;
    }
  }

  return correctAnswer;
};

const prepareDataForRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const expression = `${number1} ${number2}`;
  const correctAnswer = getGameAnswer(number1, number2).toString();

  return [expression, correctAnswer];
};

export default () => {
  startGame('Find the greatest common divisor of given numbers.', prepareDataForRound);
};
