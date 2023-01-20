import {
  getRandomNumber,
  startGame,
} from '../index.js';

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomNumber();
  return operators[index % operators.length];
};

const getGameAnswer = (number1, operator, number2) => {
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      throw new Error(`No operator: ${operator}!`);
  }
  return correctAnswer;
};

const startRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getOperator();
  const expression = `${number1} ${operator} ${number2}`;
  const correctAnswer = getGameAnswer(number1, operator, number2).toString();

  return [expression, correctAnswer];
};

export default () => {
  startGame('What is the result of the expression?', startRound);
};
