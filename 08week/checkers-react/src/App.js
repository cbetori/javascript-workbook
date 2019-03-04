import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

import './App.css';
import Board from './Board'
import Checkers from './Checkers'

class App extends Component {
  render() {
    return (
      <Container className="App">
       <Checkers/>
      </Container>
    );
  }
}

export default App;
