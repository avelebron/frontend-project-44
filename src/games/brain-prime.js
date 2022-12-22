import { getRandomNumber, askQuestion, test, getAnswer } from '../index.js';

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

export const greetingBrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const startBrainPrime = () => {
  const number = getRandomNumber();
  askQuestion(number);
  const answer = getAnswer();
  const gameAnswer = isPrime(number) ? 'yes' : 'no';

  return test(answer, gameAnswer);
};