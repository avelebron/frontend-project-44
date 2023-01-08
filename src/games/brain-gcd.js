import {
  greeting,
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
  startGame,
} from '../index.js';

const greetingBrainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const startRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const expression = `${number1} ${number2}`;
  askQuestion(expression);
  const answer = Number(getAnswer());
  let gameAnswer = 0;

  for (let i = number1; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      gameAnswer = i;
      break;
    }
  }

  return test(answer, gameAnswer);
};

export default () => {
  greeting();

  greetingBrainGcd();

  startGame(startRound);
};
