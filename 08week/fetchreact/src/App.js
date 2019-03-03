import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HoldMyBeer from './holdmybeer.js'
import { Container, Jumbotron, Button } from 'reactstrap';

class App extends Component {

  getInfo(){
    fetch('https://api.punkapi.com/v2/beers')
        .then((response)=>response.json())
        .then((data)=>{console.log(data)})
  }
  render() {
    return (
      <Container className="App">
      <Jumbotron>
          <HoldMyBeer />
      </Jumbotron>
      <Button onClick={this.getInfo}>Log Some Shit</Button>
      </Container>
    );
  }
}


export default App;
