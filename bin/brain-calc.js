#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 10);

const operators = ['+', '-', '*'];

const startRound = () => {
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

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const result = startRound();
    if (!result) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

startGame();
