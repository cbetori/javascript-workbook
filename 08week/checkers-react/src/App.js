import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';

import Checkers from './Checkers'
import Scoreboard from  './Scoreboard'

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
