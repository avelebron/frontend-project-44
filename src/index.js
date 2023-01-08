import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const userName = getName();
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

export const greeting = () => {
  console.log(`Hello, ${userName}!`);
};

export const startGame = (startRound) => {
  for (let i = 0; i < 3; i += 1) {
    const result = startRound();

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
