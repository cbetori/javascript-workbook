'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard(guess) {
  board.push(guess)
  for (let i = 0; i < board.length; i++) {
    //console.log(board);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {

  let hint
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetter = 0;
  let targetIndex = 0;

  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations = correctLetterLocations + 1;
      solutionArray[i] = null;
    }
  }
  for (let i = 0; i < solutionArray.length; i++) {
    targetIndex = guessArray.indexOf(solutionArray[i]);
    if(targetIndex > -1){
      correctLetter = correctLetter + 1;
      solutionArray[i] = null;
    }
  }
  console.log('Hint: '+ correctLetterLocations + '-' + correctLetter);
  return correctLetterLocations + '-' + correctLetter;
}

function mastermind(guess) {
  solution = 'abcd';

  if (guess === solution) {
    console.log("You guessed it!")
    return "You guessed it!"
  } else {
    console.log("Wrong")
    generateHint(guess);
  }
  printBoard(guess);
  // Comment this out to generate a random solution
  // your code here
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

module.exports = {
  mastermind,
  board,
  generateHint,
  generateSolution,
  getPrompt
}

getPrompt();


