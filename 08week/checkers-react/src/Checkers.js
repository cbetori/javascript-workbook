import React, { Component } from 'react'
import './checkers.css'
import Board from './Board'

class Checkers extends Component{
    state = {
        color: 'black',
        king: false,
        index: 0,
        locationArray: [8],
        startLocation: 
        [1,3,5,7,
        8,10,12,14,
        17,19,21,23,
        40,42,44,46,
        49,51,53,55,
        56,58,60,62],
    }

    createCheckersArray = () =>{
        let locationArraySet = []
        for(let i = 0; i < 64; i++){
            locationArraySet.push('')
        }
        this.setState({locationArray: locationArraySet})
    }

    createCheckers = () =>{
        let locationArraySet= []
        this.state.startLocation.map((element, index)=>{
            this.state.startLocation.map((startElement, startIndex)=>{
                if (element === startElement){
                    locationArraySet.push(
                        <div 
                            type='button'
                            key={index}
                            id={'checker_'+index} 
                            className='checker'>
                        </div>
                    )
                }
            })
        })
        this.setState({locationArray: locationArraySet})
    }

    componentDidMount = () =>{
        this.createCheckersArray()
        this.createCheckers()
    }

    render(){
        return(
            <React.Fragment>
                <Board checkersArray={this.state.locationArray}/>
            </React.Fragment>
        )
    }
}

export default Checkers