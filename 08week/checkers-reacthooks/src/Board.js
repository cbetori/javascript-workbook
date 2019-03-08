import React, { useState, useEffect } from 'react'
import './css/board.css'

export default  function Board(props){

    function createSquare(index, color) {
        return(
            <div
                type='button' 
                className={'square square_'+color}
                id={'square_'+index}
                key={index}
                onClick={()=>callClick(index)}
                >
                {props.checkerLocation[index]}
            </div>
        )
    }

    function callClick(index){
        props.handleCheckerClick(index)
    }

    return(
        <React.Fragment>
        <div className='boardRow'>
            {createSquare(0, 'white')}
            {createSquare(1, 'black')}
            {createSquare(2, 'white')}
            {createSquare(3, 'black')}
            {createSquare(4, 'white')}
            {createSquare(5, 'black')}
            {createSquare(6, 'white')}
            {createSquare(7, 'black')}
        </div>
        <div className='boardRow'>
            {createSquare(8, 'black')}
            {createSquare(9, 'white')}
            {createSquare(10, 'black')}
            {createSquare(11, 'white')}
            {createSquare(12, 'black')}
            {createSquare(13, 'white')}
            {createSquare(14, 'black')}
            {createSquare(15, 'white')}
        </div>
        <div className='boardRow'>
            {createSquare(16, 'white')}
            {createSquare(17, 'black')}
            {createSquare(18, 'white')}
            {createSquare(19, 'black')}
            {createSquare(20, 'white')}
            {createSquare(21, 'black')}
            {createSquare(22, 'white')}
            {createSquare(23, 'black')}
        </div>
        <div className='boardRow'>
            {createSquare(24, 'black')}
            {createSquare(25, 'white')}
            {createSquare(26, 'black')}
            {createSquare(27, 'white')}
            {createSquare(28, 'black')}
            {createSquare(29, 'white')}
            {createSquare(30, 'black')}
            {createSquare(31, 'white')}
        </div>
        <div className='boardRow'>
            {createSquare(32, 'white')}
            {createSquare(33, 'black')}
            {createSquare(34, 'white')}
            {createSquare(35, 'black')}
            {createSquare(36, 'white')}
            {createSquare(37, 'black')}
            {createSquare(38, 'white')}
            {createSquare(39, 'black')}
        </div>
        <div className='boardRow'>
            {createSquare(40, 'black')}
            {createSquare(41, 'white')}
            {createSquare(42, 'black')}
            {createSquare(43, 'white')}
            {createSquare(44, 'black')}
            {createSquare(45, 'white')}
            {createSquare(46, 'black')}
            {createSquare(47, 'white')}
        </div>
        <div className='boardRow'>
            {createSquare(48, 'white')}
            {createSquare(49, 'black')}
            {createSquare(50, 'white')}
            {createSquare(51, 'black')}
            {createSquare(52, 'white')}
            {createSquare(53, 'black')}
            {createSquare(54, 'white')}
            {createSquare(55, 'black')}
        </div>
        <div className='boardRow'>
            {createSquare(56, 'black')}
            {createSquare(57, 'white')}
            {createSquare(58, 'black')}
            {createSquare(59, 'white')}
            {createSquare(60, 'black')}
            {createSquare(61, 'white')}
            {createSquare(62, 'black')}
            {createSquare(63, 'white')} 
        </div>
    </React.Fragment>
    )
}