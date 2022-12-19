import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const steps = [1, 2, 3, 4, 5];

export const greetingBrainProgression = () => {
  console.log('What number is missing in the progression?');
};

export const startBrainProgression = () => {
  const number1 = getRandomNumber(1, 50);
  const row = [];
  const step = steps[Math.floor(Math.random() * steps.length)];
  for (let i = 0; i < 10; i += 1) {
    const number = number1 + i * step;
    row.push(number);
  }
  const indexRandom = getRandomNumber(0, 9);
  const correctAnswer = row[indexRandom];
  row[indexRandom] = '..';
  console.log(`Question: ${row.join(' ')}`);
  const answer = Number(readlineSync.question('Your answer: '));

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
