'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    //this.playValue = ['', '', '', '', '', '', '', '', ''],
    this.player = ''
    this.state = {
       playValue : ['', '', '', '', '', '', '', '', ''],
    //     player: 'X'
    }
    //this.playValue = ['', '', '', '', '', '', '', '', '']
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

  render() {
    return (
      <div>
        <div id='status'>Time to start, X goes first</div>
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
        <button onClick={()=> this.clearBoard()}>Clear Board</button>
      </div>
    );
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
    if(this.player === ''){
      statusBar.innerText = "It is O's turn"
    }else{
      statusBar.innerText = "It is " +  this.player + "'s turn"
    }
  }

  playerTurn() {
    if (this.player === 'X') {
        this.player='O'
    } else {
        this.player = 'X'
    }
    return this.player
  }

  playChecker(num) {
   // let squareValue = document.getElementById('square' + num)
   let squareValue = this.state.playValue[num]
    if (squareValue === '') {
      this.status()
      this.playerTurn()
      //console.log(this.state.player)
      let newPlayValue = this.state.playValue.slice()
      newPlayValue[num] = this.player
      this.setState({playValue: newPlayValue})
      //this.setState(prevState => ({playValue: [...prevState.playValue, this.player]}))
     // console.log(this.state.playValue)
      this.checkWinner()
    }
  }
  checkWinner() {
    for (let i = 0; i < this.winState.length; i++) {

      let xWin = 0
      let oWin = 0

      for (let x = 0; x < this.winState[i].length; x++){

        let position = this.winState[i][x];
        let square = document.getElementById('square' + position).innerHTML

        if(square === "X"){
          xWin = xWin +1
          if(xWin === 3){
            console.log("X WINS")
            document.getElementById('status').innerText = "X Wins"
          }
          
        }else if(square === "O"){
          oWin = oWin + 1
          if(oWin === 3){
            console.log("O WINS")
            document.getElementById('status').innerText = "O Wins"
          }
        }
      }
    }
  }

  clearBoard(){
    console.log(this.playValue)
    let newPlayValue = ['', '', '', '', '', '', '', '', '']
    this.playValue= newPlayValue
   
  }

}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));