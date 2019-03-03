import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import List from './List'
import AddTask from './AddTask'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newTask: "",
      tasks: ['stuff', 'things']
    }
    this.updateNewTask = this.updateNewTask.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
  }

addNewTask(){
  this.setState((previousState)=>{
    return{
    newTask: '',
    tasks: [...previousState.tasks, previousState.newTask]
    }
  })
}
  updateNewTask(event) {
    this.setState({newTask: event.target.value})
  }

  render() {
    return (
      <Container>
          <Row>
            <Col xs={{size: 6, offset: 3}}>
            <h1>Tasks</h1>
            <pre>{this.state.newTask}</pre>
            <AddTask newTask={this.state.newTask} addNewTask={this.addNewTask} updateNewTask={this.updateNewTask}/>
            <List tasks={this.state.tasks} />
            </Col>
          </Row>
      </Container>
    )
  }
}

export default App;
