import {
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

const gameRules = () => console.log('What is the result of the expression?');

const getGameAnswer = (number1, operator, number2) => {
  let correctAnswer = 0;
  const sum = number1 + number2;
  const difference = number1 - number2;
  const product = number1 * number2;

  switch (operator) {
    case '+':
      correctAnswer = sum;
      break;
    case '-':
      correctAnswer = difference;
      break;
    case '*':
      correctAnswer = product;
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
  askQuestion(expression);
  const userAnswer = Number(getAnswer());
  const correctAnswer = getGameAnswer(number1, operator, number2);

  return test(userAnswer, correctAnswer);
};

export default () => {
  startGame(gameRules, startRound);
};
