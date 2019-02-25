'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state =   {
      values: [
        '','','','','','','','',''
      ],
      player : 'X',
      winState: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
        []
      ]
    }
  }

  render() {

    return (
      <div>
        <div className="row">
          <div id='square0' className='sqaure' value={this.value} onClick={()=>this.createPlayer(0)} data-cell='0'>{this.state.values[0]}</div>
          <div id='square1' className='sqaure' value={this.value} onClick={()=>this.createPlayer(1)} data-cell='1'>{this.state.values[1]}</div>
          <div id='square2' className='sqaure' value={this.value} onClick={()=>this.createPlayer(2)} data-cell='2'>{this.state.values[2]}</div>
        </div>
        <div className="row">
          <div id='square3' className='sqaure' value={this.value} onClick={()=>this.createPlayer(3)} data-cell='3'>{this.state.values[3]}</div>
          <div id='square4' className='sqaure' value={this.value} onClick={()=>this.createPlayer(4)} data-cell='4'>{this.state.values[4]}</div>
          <div id='square5' className='sqaure' value={this.value} onClick={()=>this.createPlayer(5)} data-cell='5'>{this.state.values[5]}</div>
        </div>
        <div className="row">
          <div id='square6' className='sqaure' value={this.value} onClick={()=>this.createPlayer(6)} data-cell='6'>{this.state.values[6]}</div>
          <div id='square7' className='sqaure' value={this.value} onClick={()=>this.createPlayer(7)} data-cell='7'>{this.state.values[7]}</div>
          <div id='square8' className='sqaure' value={this.value} onClick={()=>this.createPlayer(8)} data-cell='8'>{this.state.values[8]}</div>
        </div>
      </div>
    );
  }

  playerTurn(){
    if(this.player === 'X'){
      this.player = 'O'
    }else{
      this.player ='X'
    }
  }
  createPlayer(num){
    let squareValue = document.getElementById('square'+num)
    if (squareValue.innerHTML === ''){
      this.playerTurn()
      squareValue.innerText = this.player
      this.checkWinner()
    }
  }
  checkWinner(){

    let winArray = this.state.winState
    let counter = 0;
    let xWIN = 0
    let oWin = 0
    winArray.map((element, num)=>{
 
      let square = document.getElementById('square'+num).innerHTML
      //console.log(num)
      element.map((subElement, index)=>{
        if(counter === 3){
          xWIN = 0
          oWin = 0
          counter = 0
        }
        if(square === 'X'){
          xWIN = xWIN + 1
          console.log(xWIN)
          console.log(counter);
        }else if(square === 'O'){
          oWIN = oWin + 1
          //console.log(oWin)
        }
        counter = counter + 1

      })
    })
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
