import {
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
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

const gameRules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const startRound = () => {
  const number = getRandomNumber();
  askQuestion(number);
  const userAnswer = getAnswer();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return test(userAnswer, correctAnswer);
};

export default () => {
  startGame(gameRules, startRound);
};
