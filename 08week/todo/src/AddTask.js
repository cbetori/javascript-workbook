import React, { Component } from 'react'
import {Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'

export default class AddTask extends Component{
    render(){
        return(
            <InputGroup>
                <Input placeholder="Add Task" onChange={this.props.updateNewTask} value={this.props.newTask}/>
                <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={this.props.addNewTask}>Add Task</Button>
                </InputGroupAddon>
            </InputGroup>

        )
    }
}