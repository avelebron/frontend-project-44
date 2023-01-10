import {
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
  startGame,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const startRound = () => {
  const number = getRandomNumber();
  askQuestion(number);
  const userAnswer = getAnswer();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return test(userAnswer, correctAnswer);
};

export default () => {
  startGame(gameRules, startRound);
};
