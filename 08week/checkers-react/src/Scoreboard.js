import React, {Component} from 'react'
import { Jumbotron,Row,  Col } from 'reactstrap';

class Scoreboad extends Component{
    state={
        redCheckers:[],
        blackCheckers:[]
        
    }

    getCheckersByColor=()=>{
        let redCheckersArray = []
        let blackCheckersArray = []
        for(let i = 0; i < this.props.checkersArray.length; i++){
            if(this.props.checkersArray[i].key < 24){
                redCheckersArray.push(this.props.checkersArray[i])
            }else if(this.props.checkersArray[i].key > 24){
                blackCheckersArray.push(this.props.checkersArray[i])
            }
        }
        this.setState({redCheckers: redCheckersArray})
        this.setState({blackCheckers: blackCheckersArray})
    }

    componentDidMount=()=>{
        this.getCheckersByColor()
    }

    render(){

        return(
            <Jumbotron>
                <Row>
                    <Col onClick={()=>this.getCheckersByColor()} xl='6'>Red</Col>
                    <Col  xl='6'>Black</Col>
  
                </Row>
                <Row>
                    <Col xl='6'>{this.state.redCheckers.length}</Col>
                    <Col xl='6'>{this.state.blackCheckers.length}</Col>
                </Row>
            </Jumbotron>
        )
    }
}

export default Scoreboad