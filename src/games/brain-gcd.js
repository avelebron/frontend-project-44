import {
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
  startGame,
} from '../index.js';

const gameRules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

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

const startRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const expression = `${number1} ${number2}`;
  askQuestion(expression);
  const userAnswer = Number(getAnswer());
  const correctAnswer = getGameAnswer(number1, number2);

  return test(userAnswer, correctAnswer);
};

export default () => {
  startGame(gameRules, startRound);
};
