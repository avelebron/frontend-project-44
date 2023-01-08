import {
  greeting,
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
  startGame,
} from '../index.js';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomNumber();
  return operators[index % operators.length];
};

const greetingBrainCalc = () => console.log('What is the result of the expression?');

const startRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getOperator();
  const expression = `${number1} ${operator} ${number2}`;
  askQuestion(expression);
  const answer = Number(getAnswer());
  let gameAnswer = 0;
  const sum = number1 + number2;
  const difference = number1 - number2;
  const product = number1 * number2;

  switch (operator) {
    case '+':
      gameAnswer = sum;
      break;
    case '-':
      gameAnswer = difference;
      break;
    case '*':
      gameAnswer = product;
      break;
    default:
      throw new Error(`No operator: ${operator}!`);
  }

  return test(answer, gameAnswer);
};

export default () => {
  greeting();

  greetingBrainCalc();

  startGame(startRound);
};
