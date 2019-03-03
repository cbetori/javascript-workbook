'use strict';

import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       playValue : ['', '', '', '', '', '', '', '', ''],
       player: 'X',
       winner: ''
    }

    this.winState = [
      //Horizontal Win
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //Verticle Win
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      //Diagonal Win
      [0, 4, 8],
      [2, 4, 6]
    ]
  }

    createBoard(i){
        return(
            <div 
            id={'square'+i}
            className='sqaure' 
            onClick={() => this.playChecker(i)} 
            data-cell='0'>
            {this.state.playValue[i]}
            </div>
        )   
    }
  
  status() {
    let statusBar = document.getElementById('status')
    if(this.state.player === ''){
      statusBar.innerText = "It is O's turn"
    }else{
      statusBar.innerText = "It is " +  this.state.player + "'s turn"
    }
  }

  playerTurn() {
    if (this.state.player === 'X') {
      this.setState({player: 'O'})
    } else {
      this.setState({player: 'X'})
    }
     return this.state.player
  }

  checkWinner() {
    for (let i = 0; i < this.winState.length; i++) {

      let xWin = 0
      let oWin = 0

      for (let x = 0; x < this.winState[i].length; x++){

        let position = this.winState[i][x];
       // let square = document.getElementById('square' + position).innerHTML
        let square = this.state.playValue[position]
        if(square === "X"){
          xWin = xWin + 1
          
          if(xWin === 3){
            this.setState({winner: 'X'})
            document.getElementById('status').innerText = "X is the Winner"
          }
          
        }else if(square === "O"){
          oWin = oWin + 1
          if(oWin === 3){
            this.setState({winner: 'O'})
            document.getElementById('status').innerText = "O is the Winner"
          }
        }
      }
    }
  }

  playChecker(num) {
    let squareValue = this.state.playValue[num]
     if (squareValue === '') {
       this.playerTurn()
       this.status()
 
       let newPlayValue = this.state.playValue.slice()
       newPlayValue[num] = this.state.player
       this.setState({playValue: newPlayValue},()=> this.checkWinner(this.state.playValue))
       //this.setState(()=>{return{playValue: newPlayValue}})
       //this.checkWinner()
     }
   }

  clearBoard(){
    console.log(this.state.playValue)
    let newPlayValue = ['', '', '', '', '', '', '', '', '']
    this.setState({playValue: newPlayValue})
    this.setState({player: 'X'})
    document.getElementById('status').innerText = "Time to start, X goes first"
  }

  render() {
    return (
      <Container>
        <div id='status' className='header/footer'>Time to start, X goes first</div>
        <div className='row'>
            {this.createBoard(0)}
            {this.createBoard(1)}
            {this.createBoard(2)}
        </div>
        <div className='row'>
            {this.createBoard(3)}
            {this.createBoard(4)}
            {this.createBoard(5)}
        </div>
        <div className='row'>
            {this.createBoard(6)}
            {this.createBoard(7)}
            {this.createBoard(8)}
        </div>
        <div id="clear" className='headerfooter' onClick={()=> this.clearBoard()}>Clear Board</div>
      </Container>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
