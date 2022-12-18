#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const startRound = () => {
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

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
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
