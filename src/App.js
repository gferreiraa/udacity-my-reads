import React, { Component } from 'react';
import './App.css';
import Navbar from "../src/componentes/NavBar";
import Shelf from './componentes/Shelf';
import Footer from './componentes/Footer';
import FAB from './componentes/FAB';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Shelf/>
        <FAB/>
        <Footer/>
      </div>
    );
  }
}

export default App;
