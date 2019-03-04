import React, { Component } from 'react'
import './checkers.css'
import Board from './Board'

class Checkers extends Component{
    state = {
        color: 'black',
        king: false,
        index: 0,
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
        let locationArraySet = this.state.locationArray
            for(let i = 0; i < 64; i++){
                if (this.state.startLocation.indexOf(i) != -1){
                    locationArraySet.push(
                        <div 
                            type='button'
                            key={i}
                            id={'checker_'+i} 
                            className='checker'
                            onClick={() => this.handleClick(i)}>
                        </div>
                    )
                }else{
                    locationArraySet.push('')
                }
        }
        this.setState({locationArray: locationArraySet})
    }

    componentDidMount = () =>{
        this.createCheckers()
        console.log("mount")
    }

    handleClick = (index) =>{
        console.log(index)
       let  locationArraySet = this.state.locationArray.slice()
       locationArraySet[index] = ''
        this.setState({locationArray: locationArraySet})
    }


    render(){
        return(
            <React.Fragment>
                <Board checkersArray={this.state.locationArray}/>
               {console.log(this.state.locationArray)}
            </React.Fragment>
        )
    }
}

export default Checkers