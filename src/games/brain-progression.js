import {
  getRandomNumber,
  askQuestion,
  test,
  getAnswer,
} from '../index.js';

const getStep = () => {
  const steps = [1, 2, 3, 4, 5];
  const index = getRandomNumber();
  return steps[index % steps.length];
};

const getProgression = () => {
  const number1 = getRandomNumber();
  const row = [];
  const step = getStep();
  const rowLength = 10;
  for (let i = 0; i < rowLength; i += 1) {
    const number = number1 + i * step;
    row.push(number);
  }
  return row;
};

export const greetingBrainProgression = () => {
  console.log('What number is missing in the progression?');
};

export const startBrainProgression = () => {
  const progression = getProgression();
  const indexRandom = getRandomNumber() % progression.length;
  const gameAnswer = progression[indexRandom];
  progression[indexRandom] = '..';
  const expression = `${progression.join(' ')}`;
  askQuestion(expression);
  const answer = Number(getAnswer());

  return test(answer, gameAnswer);
};
