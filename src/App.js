import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Introduction from './components/Introduction/Introduction';
import Services from './components/Services/Services';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Carousel />
        <Introduction />
        <Services />
      </div>
    );
  }
}

export default App;
