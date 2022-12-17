import readlineSync from 'readline-sync';
import { greetingBrainEven, startBrainEven } from '../src/games/braineven.js';
import { greetingBrainCalc, startBrainCalc } from '../src/games/braincalc.js';

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    const gameName = readlineSync.question('');

    let result;

    switch (gameName) {
      case 'brain-even':
        greetingBrainEven();
        result = startBrainEven();
        break;
      case 'brain-calc':
        greetingBrainCalc();
        result = startBrainCalc();
        break;
      default:
        break;
    }

    for (let i = 0; i < 3; i += 1) {
      result;
      if (!result) {
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };

  startGame();
  