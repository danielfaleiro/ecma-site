import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
      </div>
    );
  }
}

export default App;
