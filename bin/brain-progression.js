#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const steps = [1, 2, 3, 4, 5];

const startRound = () => {
  const number1 = getRandomNumber(1, 50);
  const row = [];
  const step = steps[Math.floor(Math.random() * steps.length)];
  for (let i = 0; i < 10; i += 1) {
    let number = number1 + i * step;
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

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
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
