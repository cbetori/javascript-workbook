'use strict';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checker(color) {
  //Set the symbol of each symbol
  if(color === 'white'){
    this.symbol = String.fromCharCode(0x125CB);
  }else{
    this.symbol = String.fromCharCode(0x125CF);
  }
  return this.symbol;
}
class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
    createCheckers() {
        //Checkers location at the start of a new game
        let position = {
          white:[
            [0, 1], [0, 3], [0, 5], [0, 7],
            [1, 0], [1, 2], [1, 4], [1, 6],
            [2, 1], [2, 3], [2, 5], [2, 7]
          ],
          black:[
            [5, 0], [5, 2], [5, 4], [5, 6],
            [6, 1], [6, 3], [6, 5], [6, 7],
            [7, 0], [7, 2], [7, 4], [7, 6]
          ], 
        }

        //Places the pieces onto the board
        for (let color in position){
            for (let location of position[color]){
              //Initiate a new Checker and pass in the color
              let checker = new Checker(color);
              //Set the checker on the grid
              this.grid[location[0]][location[1]] = checker;
              //Add instance of the Checker onto the checkers array
              this.checkers.push(checker)
            }
        }
    }
  selectChecker(start, end) {
    //return checker at a particulare spot
    let checker = this.grid[start[0]][start[1]];
    //let removeChecker = this.checkers.indexOf(this.grid[end[0]][end[1]]);
    this.grid[end[0]][end[1]] = checker;
    this.grid[start[0]][start[1]] = ' ';
    //return removeChecker;
  }
  killChecker(position) {
    //Set the killed piece to a blank space
    this.grid[position[0]][position[1]] = ''

    //Store index of checker in checkers array
    let removeChecker = this.checkers.indexOf(this.grid[position[0]][position[1]])
    //Remove checker from array in order to count pieces on board
    this.checkers.splice(removeChecker,1);
  }
}
class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }
  moveChecker(start, end){
    //Move checker
    this.board.selectChecker(start, end);
    //See if player moved up two rows indicating they jumped the other player
    if ((Math.abs(start[0]-end[0])) === 2){

      //Get the posistion the jumped checker
      let newRow = ((parseFloat(start[0])+parseFloat(end[0]))/2);
      let newColumn = ((parseFloat(start[1])+parseFloat(end[1]))/2);
      let newPosition = [newRow,newColumn]

      //Remove it from board and checkers array
      this.board.killChecker(newPosition);
    }
  }
}
function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}
const game = new Game();
game.start();
getPrompt();
module.exports = game;