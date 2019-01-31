'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board);
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

function generateHint(solution, guess) {
  let matchCheck = 0;
  let indexCheck = 0;
  for(let i=0; i<solution.length; i++){
    for(let x=0; x<guess.length; i++){
      if(solution[i] === guess[x]){
        matchCheck = matchCheck + 1;
        if(i === x){
          indexCheck = indexCheck + 1;
        }
      }
    }
  }
  return matchCheck + '-' + indexCheck;
}

function mastermind() {
  solution = 'abcd';
  guess = 'abcd';
  printBoard(board.push(solution));
  if(guess === solution){
    return "You guessed it!"
  }else{
    generateHint()
  }
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

module.exports={
  mastermind,
  board,
  generateHint,
  generateSolution,
  getPrompt
}

getPrompt();


