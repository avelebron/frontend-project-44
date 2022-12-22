import { getRandomNumber, askQuestion, test, getAnswer } from '../index.js';

const isEven = (num) => num % 2 === 0;

export const greetingBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const startBrainEven = () => {
  const number = getRandomNumber();
  askQuestion(number);
  const answer = getAnswer();
  const gameAnswer = isEven(number) ? 'yes' : 'no';

  return test(answer, gameAnswer);
};
