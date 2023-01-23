import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const getStep = () => {
  const steps = [1, 2, 3, 4, 5];
  const index = getRandomNumber();
  return steps[index % steps.length];
};

const getProgression = (number1, step, rowLength = 10) => {
  const row = [];
  for (let i = 0; i < rowLength; i += 1) {
    const number = number1 + i * step;
    row.push(number);
  }
  return row;
};

const prepareDataForRound = () => {
  const number1 = getRandomNumber();
  const step = getStep();
  const progression = getProgression(number1, step);
  const indexRandom = getRandomNumber() % progression.length;
  const correctAnswer = progression[indexRandom].toString();
  progression[indexRandom] = '..';
  const expression = `${progression.join(' ')}`;

  return [expression, correctAnswer];
};

export default () => {
  startGame('What number is missing in the progression?', prepareDataForRound);
};
