'use strict';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getPrompt() {
    grid();
    rl.question('which piece?: ', (whichPiece) => {
      rl.question('to where?: ', (toWhere) => {
        game.moveChecker(whichPiece, toWhere);
        getPrompt();
      });
    });
  }
/////////////////////////////////////////////////////////////////////////////////

let grid = function(){
    createGrid();
    viewGrid();
}

let createGrid = function(){
    let gridArray = []
    for (let row = 0; row < 8; row++) {
        gridArray[row] = [];
        for (let column = 0; column < 8; column++) {
            gridArray[row].push(null);
        }
    }
}

let viewGrid = function(){
    let board = "  0 1 2 3 4 5 6 7\n";
    for(let row = 0; row < 7; row++){
        const checkersRow = [row];
        for(let column = 0; column < 8; column++){
            checkersRow.push(' ');
        }
        board += checkersRow.join(' ')+'\n';
    }
    console.log(board);
};

/////////////////////////////////////////////////////////////////////////////////
let checkersStartPosition = function(arg){
    let red = [ 
        [0, 1], [0, 3], [0, 5], [0, 7],
        [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]
        ]
    let black = [   
        [5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
        [7, 0], [7, 2], [7, 4], [7, 6]
        ];
    return checkersStartPosition;
}

let Checker = function(){
    this.color = null;
    this.location = null
    this.kinged = false;
}
Checker.prototype.createChecker = function(arg){
    // for(let i = 0; i<checkersStartPosition.){
        
    // }
}
/////////////////////////////////////////////////////////////////////////////////
let handleChecker = function(){

}

let handleKill = function(){

}

let handleKing =  function(){

}
/////////////////////////////////////////////////////////////////////////////////

getPrompt();