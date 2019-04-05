import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Introduction from './components/Introduction/Introduction';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <Introduction />
      </div>
    );
  }
}

export default App;
