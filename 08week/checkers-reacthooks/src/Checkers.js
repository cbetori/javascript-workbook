import React, { useState, useEffect } from 'react'
import './css/checkers.css'
import Board from './Board'

function initializeCheckers() {
    let array = []
    let initialCheckerLocations = [1,3,5,7,8,10,12,14,17,19,21,23,40,42,44,46,49,51,53,55,56,58,60,62]
    for (let i = 0; i < 64; i++) {
            if(initialCheckerLocations.indexOf(i) != -1){
                array.push(
                    <div
                        id={i}
                        className={'checker'}>
                        
                    </div>
                )
            }else{
                array.push('')
            }
    }
    return array
}

function Checkers() {
    const [checkerLocation, setCheckerLocation] = useState([])
    //const [selectedChecker, setSelectedChecker] = useState()


    useEffect(() => {
        setCheckerLocation(initializeCheckers)
    })

    return (
        <React.Fragment>
            <Board checkerLocation={checkerLocation}/>
        </React.Fragment>
    )
}

export default Checkers