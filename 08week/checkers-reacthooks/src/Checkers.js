import React, { useState, useEffect } from 'react'
import './css/checkers.css'
import Board from './Board'

export default function Checkers(props) {
    const [checkerLocation, setCheckerLocation] = useState([])
    const [clickCount, setClickCount] = useState(0)
    const [movedChecker, setMovedChecker] = useState(0)
     //const [selectedChecker, setSelectedChecker] = useState()

    function initializeCheckers() {
        let color
        let array = []
        let initialCheckerLocations = [1,3,5,7,8,10,12,14,17,19,21,23,40,42,44,46,49,51,53,55,56,58,60,62]
        for (let i = 0; i < 64; i++) {
                if(initialCheckerLocations.indexOf(i) != -1){
                    if (i < 24){
                        color = 'red'
                    }else{
                        color = 'black'
                    }
                    array.push(
                        <div
                            id={i}
                            className={'checker checker_'+color}
                            >
                        </div>
                    )
                }else{
                    array.push('')
                }
        }
        return array
    }

    function handleCheckerClick(index){
        let array = checkerLocation.slice()

        //Makes a clicked checker dissapear
        if(array[index].props  !== undefined && clickCount === 0){
            setMovedChecker(array[index])
            array[index] = ''
            setCheckerLocation(array)
            setClickCount(1)
       
        //Add value of moved checker to new clicked spot
        }else if(clickCount === 1){
            array[index] = movedChecker
            setCheckerLocation(array)
            console.log(index)
            setMovedChecker([])
            setClickCount(0)
        }
        
    }

    useEffect(() => {
        setCheckerLocation(initializeCheckers)
        console.log('useEffect Fired')
    },[setCheckerLocation])

    return (
        <React.Fragment>
            <Board checkerLocation={checkerLocation} handleCheckerClick={handleCheckerClick}/>
            <div type='button' onClick={()=>console.log(checkerLocation)}>Start</div>
        </React.Fragment>
    )
}

