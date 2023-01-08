import {
  greeting,
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
  startGame,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const greetingBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const startRound = () => {
  const number = getRandomNumber();
  askQuestion(number);
  const answer = getAnswer();
  const gameAnswer = isEven(number) ? 'yes' : 'no';

  return test(answer, gameAnswer);
};

export default () => {
  greeting();

  greetingBrainEven();

  startGame(startRound);
};
