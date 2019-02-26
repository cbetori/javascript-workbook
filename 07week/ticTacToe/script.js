'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        '', '', '', '', '', '', '', '', ''
      ],
      winState: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
        [null, null, null]
      ]
    }
    this.player = ""
  }

  render() {

    return (
      <div>
        <div id='status'>Time to start, X goes first</div>
        <div className="row">
          <div id='square0' className='sqaure' onClick={() => this.createPlayer(0)} data-cell='0'>{this.state.values[0]}</div>
          <div id='square1' className='sqaure' onClick={() => this.createPlayer(1)} data-cell='1'>{this.state.values[1]}</div>
          <div id='square2' className='sqaure' onClick={() => this.createPlayer(2)} data-cell='2'>{this.state.values[2]}</div>
        </div>
        <div className="row">
          <div id='square3' className='sqaure' onClick={() => this.createPlayer(3)} data-cell='3'>{this.state.values[3]}</div>
          <div id='square4' className='sqaure' onClick={() => this.createPlayer(4)} data-cell='4'>{this.state.values[4]}</div>
          <div id='square5' className='sqaure' onClick={() => this.createPlayer(5)} data-cell='5'>{this.state.values[5]}</div>
        </div>
        <div className="row">
          <div id='square6' className='sqaure' onClick={() => this.createPlayer(6)} data-cell='6'>{this.state.values[6]}</div>
          <div id='square7' className='sqaure' onClick={() => this.createPlayer(7)} data-cell='7'>{this.state.values[7]}</div>
          <div id='square8' className='sqaure' onClick={() => this.createPlayer(8)} data-cell='8'>{this.state.values[8]}</div>
        </div>
      </div>
    );
  }

  status() {
    let statusBar = document.getElementById('status')
    if(this.player === ''){
      statusBar.innerText = "It is O's turn"
    }else{
    statusBar.innerText = "It is " +  this.player + "'s turn"
    }
  }

  playerTurn() {
    if (this.player === 'X') {
      this.player = 'O'
    } else {
      this.player = 'X'
    }
    return this.player
  }
  createPlayer(num) {
    let squareValue = document.getElementById('square' + num)
    if (squareValue.innerHTML === '') {
      this.status()
      this.playerTurn()
      squareValue.innerText = this.player
      this.checkWinner()
    }
  }
  checkWinner() {

    let winArray = this.state.winState
    let counter = 0;
    let xWIN = 0
    let oWin = 0
    winArray.map((element, num) => {

      console.log(element)
      xWIN = 0
      oWin = 0
      counter = 0
      element.map((subElement, index) => {
        let square = document.getElementById('square' + index).innerHTML
        let square2 = document.getElementById('square' + num)

        if (square === 'X') {
         // console.log(xWIN)
          xWIN = xWIN + 1
          
        console.log(xWIN)
        } else if (square === 'O') {
          oWin = oWin + 1
        }
        // if(counter === 2){
        //  xWIN = 0
        //  oWin = 0
        // }
        counter = counter + 1
      })
    })
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
