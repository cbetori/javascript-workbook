import React, { Component } from 'react'
import './checkers.css'
import Board from './Board'
import ScoreBoard from './Scoreboard'

class Checkers extends Component{
    state = {
        color: 'black',
        king: false,
        index: 0,
        boardLocation: -1,
        selectedChecker: -1,
        locationArray: [],
        startLocation: 
        [1,3,5,7,
        8,10,12,14,
        17,19,21,23,
        40,42,44,46,
        49,51,53,55,
        56,58,60,62],
    }
    

    //Creates initial checker array on load
    componentWillMount = () =>{
        this.createCheckers()
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
                            //onDragEnd={(event)=>this.handleOldLocation(event, i)}
                            >
                        </div>
                    )
                }else{
                    locationArraySet.push('')
                }
        }
        this.setState({locationArray: locationArraySet})
    }

    handleDrag = (event, index) =>{
        event.dataTransfer.setData('button',event.target.id)
        this.setState({selectedChecker: index})
    }

    // handleMove=(index)=>{
    //     this.movePiece(index).then(()=>{this.handleOldLocation()})
    // }

    handleMove = (index) =>{
        let locationArraySet = this.state.locationArray.slice()
        let selection = this.state.selectedChecker

        locationArraySet[index] = locationArraySet[selection]
        console.log(selection)

        this.setState({locationArray: locationArraySet})
        this.setState({boardLocation: index})
    }

    //After a checker is removed this replaces the array value with and empty string
    handleOldLocation = () =>{
        // console.log(this.state.selectedChecker)
        // console.log(this.state.boardLocation )
        if(this.state.boardLocation != this.state.selectedChecker){
            let selection = this.state.selectedChecker
            //console.log(selection)
            let locationArraySet = this.state.locationArray.slice()

            locationArraySet = []

            this.setState({locationArray: locationArraySet})
            this.setState({selectedChecker: -1})
        }
    }

    render(){
        return(
            <React.Fragment>
                <ScoreBoard
                    checkersArray={this.state.locationArray} 
                />
                <Board 
                    checkersArray={this.state.locationArray} 
                    handleMove={this.handleMove} 
                />
                <div onClick={()=>this.handleOldLocation()}>test this</div>
                {console.log(this.state.locationArray)}
            </React.Fragment>
        )
    }
}

export default Checkers