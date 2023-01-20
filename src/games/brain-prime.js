import {
  getRandomNumber,
  startGame,
} from '../index.js';

const isPrime = (number) => {
  const num = number;
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startRound = () => {
  const expression = getRandomNumber();
  const correctAnswer = isPrime(expression) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

export default () => {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no".', startRound);
};
