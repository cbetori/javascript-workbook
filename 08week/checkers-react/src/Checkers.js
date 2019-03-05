import React, { Component } from 'react'
import './checkers.css'
import Board from './Board'

class Checkers extends Component{
    state = {
        color: 'black',
        king: false,
        index: 0,
        selectedChecker: 0,
        locationArray: [],
        startLocation: 
        [1,3,5,7,
        8,10,12,14,
        17,19,21,23,
        40,42,44,46,
        49,51,53,55,
        56,58,60,62],
    }

    createCheckers = () =>{
        let locationArraySet = []
        //Give checkers a count from 1-24
        let checkerCount = 0
            for(let i = 0; i < 64; i++){
                //Dedermine Color
                let checkerColor = 'red'
                if (checkerCount>11){
                    checkerColor = 'black'
                }
                if (this.state.startLocation.indexOf(i) != -1){
                    checkerCount = checkerCount + 1
                    locationArraySet.push(
                        <div 
                            type='button'
                            key={i}
                            id={'checker_'+checkerCount} 
                            className={'checker checker_'+checkerColor}
                            draggable = 'true'
                            onDragStart={(event)=>this.handleDrag(event, i)}
                            >
                        </div>
                    )
                }else{
                    locationArraySet.push('')
                }
        }
        this.setState({locationArray: locationArraySet})
        console.log('whatakjfd')
    }

    componentDidMount = () =>{
        this.createCheckers()
    }

    // handleSelection = (index) =>{
    //     this.setState({selectedChecker: index})
    // }

    handleDrag = (event, index) =>{
        event.dataTransfer.setData('button',event.target.id)
        this.setState({selectedChecker: index})
    }

    handleMove = (index) =>{
        let locationArraySet = this.state.locationArray.slice()

        let selection = this.state.selectedChecker
        locationArraySet[index] = locationArraySet[selection]
        this.setState({locationArray: locationArraySet})
        this.handleOldLocation()
    }

    handleOldLocation = () =>{
        let selection = this.state.selectedChecker
        console.log("old")
        let locationArraySet = this.state.locationArray.slice()
        locationArraySet[selection] = ''
        this.setState({locationArray: locationArraySet})
    }

    render(){
        return(
            <React.Fragment>
                <Board 
                    checkersArray={this.state.locationArray} 
                    handleMove={this.handleMove} 
                />
                {console.log(this.state.locationArray)}
            </React.Fragment>
        )
    }
}

export default Checkers