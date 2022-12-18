import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (num) => num % 2 === 0;

export const greetingBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const startBrainEven = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log('This is wrong answer ;(.');
  return false;
};
