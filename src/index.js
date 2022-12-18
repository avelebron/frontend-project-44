import readlineSync from 'readline-sync';
import { greetingBrainEven, startBrainEven } from './games/braineven.js';
import { greetingBrainCalc, startBrainCalc } from './games/braincalc.js';
import { greetingBrainGcd, startBrainGcd } from './games/braingcd.js';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameName = readlineSync.question('');

  let result;

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
    default:
      break;
  }

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
      default:
        break;
    }
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
