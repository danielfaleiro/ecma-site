import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Introduction from './components/Introduction/Introduction';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '/'
    };
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    let displayContent;
    const route = this.state.route;

    if (route === '/') {
      displayContent = 
        <>
          <Carousel />
          <Introduction />
          <Services />
          <Testimonials />
        </>
    } else if (route === 'contact') {
      displayContent = <ContactPage />;
    }
    return (
      <>
        <NavBar onRouteChange={this.onRouteChange}/>
        {displayContent}
        <Footer />
      </>
    );
  }
}

export default App;
