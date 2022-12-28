### Hexlet tests and linter status:
[![Actions Status](https://github.com/avelebron/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/avelebron/frontend-project-44/actions)

<a href="https://codeclimate.com/github/avelebron/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/e31114e320c2fa2086d8/maintainability" /></a>

Brain Games

Brain Games is a set of five console arithmetic games. Each game asks questions that need to be answered correctly.
After three correct answers or one wromg answer the game is considered to be completed. Then you can start new game.

Games:

Brain-even: determine if a number is even or not.
Brain-calc: calculate an arithmetic expression.
Brain-gcd: determine the largest common divisor of two given numbers.
Brain-progression: find missing number in a sequence.
Brain-prime: determine if a number is prime or not.

Installation:

The game can only be run on a Unix-like operating system. Make sure you have Node.js and npm instulled. Then run following commands:
  node -v
  npm -v

Node.js v13.0.0 or higher must be installed to run the game. Then install the Brain Games:
  1. Clone the repository: git clone https://github.com/avelebron/frontend-project-44.git
  2. Go to repository directory: cd frontend-project-44
  3. Install dependencies: make install
  4. Install the package: make link

Starting a game:

Run the chosen game by entering its title.

$brain-even

The game generates a random number. Determine if number is even or not and answer 'yes' or 'no' accordingly.
[![asciicast](https://asciinema.org/a/546166.svg)](https://asciinema.org/a/546166)

$brain-calc

The game generates an arithmetic expression. Calculate it and enter your answer.
[![asciicast](https://asciinema.org/a/546411.svg)](https://asciinema.org/a/546411)

$brain-gcd

The game generates two random numbers. Determine their largest common divisor and enter your answer.
[![asciicast](https://asciinema.org/a/546490.svg)](https://asciinema.org/a/546490)

$brain-progression

The game generates a progression, but one of its numbers is missing. Determine it and enter your answer.
[![asciicast](https://asciinema.org/a/546591.svg)](https://asciinema.org/a/546591)

$brain-prime

The game generates a random number. Determine if number is prime or not and answer 'yes' or 'no' accordingly.
[![asciicast](https://asciinema.org/a/546598.svg)](https://asciinema.org/a/546598)