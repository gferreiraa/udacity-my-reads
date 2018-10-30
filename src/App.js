import React, { Component } from 'react';
import './App.css';
import Button from "@material-ui/core/Button";
import Navbar from "../src/componentes/NavBar";
import Shelf from './componentes/Shelf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar align="center"/>
        <Shelf/>
        <Button variant="contained" color="primary">Hello World</Button>
      </div>
    );
  }
}

export default App;
