import React, { Component } from 'react'
import './board.css'
import Checkers from './Checkers'

class Board extends Component{
    state = {
        //value: [],
        squareColor: '',
        playervalue: 'O',
        //checkersArray: this.props.checkersArray
    }

    createBoard = (index, color) =>{
       // this.state.value.push(index)
        return(
            <div
                type='button' 
                className={'square square_'+color}
                key={index}
                id={index}
                onDragOver={(event)=>this.allowDrop(event, index)}
                onDrop={(event)=>this.handleDrop(event,index)}
                >
                {this.props.checkersArray[index]}
            </div>
        )
    }

    handleDrop =(event,index)=>{
        event.preventDefault();
        let data = event.dataTransfer.getData('button');
        console.log(index)
        event.target.appendChild(document.getElementById(data));
        this.props.handleMove(index)
    }

    allowDrop = (event, index) =>{
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <div className='boardRow'>
                    {this.createBoard(0, 'white')}
                    {this.createBoard(1, 'black')}
                    {this.createBoard(2, 'white')}
                    {this.createBoard(3, 'black')}
                    {this.createBoard(4, 'white')}
                    {this.createBoard(5, 'black')}
                    {this.createBoard(6, 'white')}
                    {this.createBoard(7, 'black')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(8, 'black')}
                    {this.createBoard(9, 'white')}
                    {this.createBoard(10, 'black')}
                    {this.createBoard(11, 'white')}
                    {this.createBoard(12, 'black')}
                    {this.createBoard(13, 'white')}
                    {this.createBoard(14, 'black')}
                    {this.createBoard(15, 'white')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(16, 'white')}
                    {this.createBoard(17, 'black')}
                    {this.createBoard(18, 'white')}
                    {this.createBoard(19, 'black')}
                    {this.createBoard(20, 'white')}
                    {this.createBoard(21, 'black')}
                    {this.createBoard(22, 'white')}
                    {this.createBoard(23, 'black')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(24, 'black')}
                    {this.createBoard(25, 'white')}
                    {this.createBoard(26, 'black')}
                    {this.createBoard(27, 'white')}
                    {this.createBoard(28, 'black')}
                    {this.createBoard(29, 'white')}
                    {this.createBoard(30, 'black')}
                    {this.createBoard(31, 'white')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(32, 'white')}
                    {this.createBoard(33, 'black')}
                    {this.createBoard(34, 'white')}
                    {this.createBoard(35, 'black')}
                    {this.createBoard(36, 'white')}
                    {this.createBoard(37, 'black')}
                    {this.createBoard(38, 'white')}
                    {this.createBoard(39, 'black')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(40, 'black')}
                    {this.createBoard(41, 'white')}
                    {this.createBoard(42, 'black')}
                    {this.createBoard(43, 'white')}
                    {this.createBoard(44, 'black')}
                    {this.createBoard(45, 'white')}
                    {this.createBoard(46, 'black')}
                    {this.createBoard(47, 'white')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(48, 'white')}
                    {this.createBoard(49, 'black')}
                    {this.createBoard(50, 'white')}
                    {this.createBoard(51, 'black')}
                    {this.createBoard(52, 'white')}
                    {this.createBoard(53, 'black')}
                    {this.createBoard(54, 'white')}
                    {this.createBoard(55, 'black')}
                </div>
                <div className='boardRow'>
                    {this.createBoard(56, 'black')}
                    {this.createBoard(57, 'white')}
                    {this.createBoard(58, 'black')}
                    {this.createBoard(59, 'white')}
                    {this.createBoard(60, 'black')}
                    {this.createBoard(61, 'white')}
                    {this.createBoard(62, 'black')}
                    {this.createBoard(63, 'white')} 
                </div>
            </React.Fragment>
        )
    }
}

export default Board