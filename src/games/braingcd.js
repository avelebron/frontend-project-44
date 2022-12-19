import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

export const greetingBrainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const startBrainGcd = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  console.log(`Question: ${number1} ${number2}`);
  const answer = Number(readlineSync.question('Your answer: '));
  let correctAnswer = 0;

  for (let i = number1; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      correctAnswer = i;
      break;
    }
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
