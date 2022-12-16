#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};

const isEven = (num) => {
  return num % 2 === 0;
};
  
const startRound = () => {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log(`Correct!`);
    return true;
  } else {
    console.log(`This is wrong answer ;(.`);
    return false;
  }
};
  
const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
