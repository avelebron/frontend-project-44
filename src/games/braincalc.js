import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 10);

const operators = ['+', '-', '*'];

export const greetingBrainCalc = () => {
  console.log('What is the result of the expression?');
};

export const startBrainCalc = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operation = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = Number(readlineSync.question('Your answer: '));
  let correctAnswer = 0;

  switch (operation) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      break;
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};
