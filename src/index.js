import readlineSync from 'readline-sync';
import { greetingBrainEven, startBrainEven } from './games/braineven.js';
import { greetingBrainCalc, startBrainCalc } from './games/braincalc.js';
import { greetingBrainGcd, startBrainGcd } from './games/braingcd.js';
import { greetingBrainPrime, startBrainPrime } from './games/brainprime.js';
import { greetingBrainProgression, startBrainProgression } from './games/brainprogression.js';

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
      break;
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
        break;
    }
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
