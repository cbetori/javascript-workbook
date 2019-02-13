'use strict';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let getPrompt = function(){
    game.board.viewGrid();
    rl.question('which piece?: ', (whichPiece) => {
      rl.question('to where?: ', (toWhere) => {
        game.moveChecker(whichPiece, toWhere);
        getPrompt();
      });
    });
  }
