const assert = require('assert');
const ticTacToe = require('./ticTacToe').ticTacToe;
let board = require('./ticTacToe').board;
const horizontalWin = require('./ticTacToe').horizontalWin;
const verticalWin = require('./ticTacToe').verticalWin;
const diagonalWin = require('./ticTacToe').diagonalWin;
const checkForWin = require('./ticTacToe').checkForWin;

describe('ticTacToe()', () => {
  it('should place mark on the board', () => {
    ticTacToe(1, 1);
    assert.deepEqual(board, [[' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
  });
  it('should alternate between players', () => {
    ticTacToe(0, 0);
    assert.deepEqual(board, [['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' ']]);
  });
  it('should check for horizontal wins', () => {
    board = board.splice(0,9,['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' ']);    
    assert.equal(horizontalWin(), true);
  });
  it('should check for vertical wins', () => {
    assert.equal(verticalWin(), true);
    board = board.splice(0,9,[' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' ']);  
  });
  it('should check for diagonal wins', () => {
    board = board.splice(0,9,['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X']);
    assert.equal(diagonalWin(), true);
  });
  it('should detect a win', () => {
    assert.equal(checkForWin(), true);
  });
});

// module.exports = {
//   board
// }