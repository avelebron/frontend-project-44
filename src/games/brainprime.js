import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const numbersPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
  37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

export const greetingBrainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export const startBrainPrime = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = numbersPrime.includes(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log('This is wrong answer ;(.');
  return false;
};
