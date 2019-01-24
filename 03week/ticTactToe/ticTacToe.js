//'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
const winState = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //veritcle
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6]
]

let playerTurn

function switchPlayer(){
  if (playerTurn === 'X'){
    playerTurn = 'O'
  } else{
    playerTurn = 'X'
  }
}

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  for(let i = 0; i<board.length; i++){
    for(let x = 0; x<board[i].length; i++){
      if(board[i][x] === playerTurn){
        let hWin = 0;
        hWin = hWin + 1;
        if(hWin === 3){
          console.log(playerTurn + ' is the Winner')
        }
      }
    }
  }
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
     //Loops 8 times times to check each individual array
     for (let i = 0; i < winState.length; i++) {
      //Variables counts the number of times X or O is present in each indivial array if the number = 3 then a winner is chosen
      let xCount = 0;
      let oCount = 0;
      //Loops 3 times to review values of each individual array
      for (let x = 0; x < winState[i].length; x++) {
        //Variable is used to concatonate id name in order to check potential winning cells
        let posisitionValue = winState[i][x];

        //Check if xCount is equal to three if so then throws winner alert
        if (posisitionValue === 'X') {
          xCount = xCount + 1;
          if (xCount == 3) {
            console.log("X is the Winner")
          }
          //Check if oCount is equal to three if so then throws winner alert
        } else if (posisitionValue === 'O') {
          oCount = oCount + 1;
          if (oCount == 3) {
            console.log("O is the Winner")
          }
        }
      }
    }
}

function ticTacToe(row, column) {
  board[row][column] = playerTurn;
}

function getPrompt() {
  switchPlayer();
  printBoard();
 
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
      horizontalWin();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
