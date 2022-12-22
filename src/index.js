import readlineSync from 'readline-sync';
import { greetingBrainEven, startBrainEven } from './games/brain-even.js';
import { greetingBrainCalc, startBrainCalc } from './games/brain-calc.js';
import { greetingBrainGcd, startBrainGcd } from './games/brain-gcd.js';
import { greetingBrainPrime, startBrainPrime } from './games/brain-prime.js';
import { greetingBrainProgression, startBrainProgression } from './games/brain-progression.js';

export const getRandomNumber = () => Math.round(Math.random() * 100);
export const askQuestion = (expression) => {
  const question = expression;
  console.log(`Question: ${question}`);
};
export const getAnswer = () => readlineSync.question('Your answer: ');
export const test = (num1, num2) => {
  const userAnswer = num1;
  const correctAnswer = num2;
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default function startGame(game) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameName = game;

  switch (gameName) {
    case 'brain-even':
      greetingBrainEven();
      break;
    case 'brain-calc':
      greetingBrainCalc();
      break;
    case 'brain-gcd':
      greetingBrainGcd();
      break;
    case 'brain-prime':
      greetingBrainPrime();
      break;
    case 'brain-progression':
      greetingBrainProgression();
      break;
    default:
      throw new Error(`Unknown game: ${gameName}!`);
  }

  let result;

  for (let i = 0; i < 3; i += 1) {
    switch (gameName) {
      case 'brain-even':
        result = startBrainEven();
        break;
      case 'brain-calc':
        result = startBrainCalc();
        break;
      case 'brain-gcd':
        result = startBrainGcd();
        break;
      case 'brain-prime':
        result = startBrainPrime();
        break;
      case 'brain-progression':
        result = startBrainProgression();
        break;
      default:
        throw new Error(`Unknown game: ${gameName}!`);
    }

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
