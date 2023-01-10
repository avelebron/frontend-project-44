import readlineSync from 'readline-sync';

export const getRandomNumber = () => Math.round(Math.random() * 100);
export const askQuestion = (expression) => console.log(`Question: ${expression}`);
export const getAnswer = () => readlineSync.question('Your answer: ');
export const test = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const startGame = (showRules, startRound) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  showRules();

  for (let i = 0; i < 3; i += 1) {
    const result = startRound();

    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
