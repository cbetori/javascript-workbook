'use strict';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function getPrompt() {
    grid();
    Checker.prototype.createChecker();
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
let red = [ 
    [0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]
    ]
let checkersStartPosition = function(colorSwitch){
    if(colorSwitch === "red"){
    let red = [ 
        [0, 1], [0, 3], [0, 5], [0, 7],
        [1, 0], [1, 2], [1, 4], [1, 6],
        [2, 1], [2, 3], [2, 5], [2, 7]
        ]
        return red  
    }else{
    let black = [   
        [5, 0], [5, 2], [5, 4], [5, 6],
        [6, 1], [6, 3], [6, 5], [6, 7],
        [7, 0], [7, 2], [7, 4], [7, 6]
        ];
        return black
    }
}

let Checker = function(color, location, index, kinged){
    this.color = null
    this.location = null
    this.index = null
    this.kinged = false
}
Checker.prototype.createChecker = function(){
    let playerColor;

    for(let i = 0; i<2; i++){
    let colorSwitch = playSwitcher(playerColor)

    checkersStartPosition(colorSwitch).map((element, index) => {
        let checker = new Checker();
        checker.color = colorSwitch
        checker.location = element;
        checker.index = index;
        //createGrid.gridArray[element] = "X"
        console.log(createGrid.gridArray)
    })

    playerColor = "red"
}
}

let playSwitcher = function(player){
    if(player === "red"){
        player = "black"
        return player;
    }else{
        player = "red"
        return player;
    }
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

// let x = [12, 99, 5, 30];

// let gt = n => m=> n<m;
// let y = x.filter(gt(20))

// console.log(y)