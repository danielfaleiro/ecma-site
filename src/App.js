import React, { Component } from 'react';
import './App.css';
import fisioImg from './components/Services/fisioterapia.jpg'
import osteoImg from './components/Services/osteopatia.jpg'
import pilatesImg from './components/Services/pilates.jpg'
import treinoImg from './components/Services/treinamento.jpg'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Service from './components/Services/Service';
import Team from './components/Team/Team';
import Clinic from './components/Clinic/Clinic';
import Faith from './components/Faith/Faith';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/Home';
import links from './links'

class App extends Component {
  onRouteChange = () => {
    const mobileNavigation = document.getElementById('mobileNavigation');
    mobileNavigation.classList.remove('show-mobile-menu');

    const navigation = document.getElementById('navigation');
    if (!navigation.classList.contains('shadow-1'))
      navigation.classList.add('shadow-1');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router>
        <div className='color-default'>
          <NavBar onRouteChange={this.onRouteChange} />
          <Route exact path={links.home} component={Home} onRouteChange={this.onRouteChange} />
          <Route path={links.clinic} component={Clinic} />
          <Route path={links.faith} component={Faith} />
          <Route path={links.team} component={Team} />
          <Route exact path={links.services.self} component={ServicesPage} />
          <Route path={links.services.fisio} component={Fisio} onRouteChange={this.onRouteChange} />
          <Route path={links.services.osteo} component={Osteo} onRouteChange={this.onRouteChange} />
          <Route path={links.services.pilates} component={Pilates} onRouteChange={this.onRouteChange} />
          <Route path={links.services.training} component={Training} onRouteChange={this.onRouteChange} />
          <Route path={links.contact} component={ContactPage} />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

const Fisio = ({onRouteChange}) => {
  const others = {
    services: ['Osteopatia', 'Pilates', 'Treinamento Físico'],
    images: [osteoImg, pilatesImg, treinoImg],
    route: [links.services.osteo, links.services.pilates, links.services.training],
  };
  return (
    <Service
        name='Fisioterapia'
        image={fisioImg}
        others={others}
        onRouteChange={onRouteChange}
    />
  );
}

const Osteo = ({onRouteChange}) => {
  const others = {
      services: ['Fisioterapia', 'Pilates', 'Treinamento Físico'],
      images: [fisioImg, pilatesImg, treinoImg],
      route: [links.services.fisio, links.services.pilates, links.services.training],
  };
  return (
      <Service
          name='Osteopatia'
          image={osteoImg}
          others={others}
          onRouteChange={onRouteChange}
      />
  );
}

const Pilates = ({onRouteChange}) => {
  const others = {
      services: ['Fisioterapia', 'Osteopatia', 'Treinamento Físico'],
      images: [fisioImg, osteoImg, treinoImg],
      route: [links.services.fisio, links.services.osteo, links.services.training],
  }
  return (
      <Service
          name='Pilates'
          image={pilatesImg}
          others={others}
          onRouteChange={onRouteChange}
      />
  );
}

const Training = ({onRouteChange}) => {
  const others = {
      services: ['Fisioterapia', 'Osteopatia', 'Pilates'],
      images: [fisioImg, osteoImg, pilatesImg],
      route: [links.services.fisio, links.services.osteo, links.services.pilates],
  }
  return (
      <Service
          name='Treinamento Físico'
          image={treinoImg}
          others={others}
          onRouteChange={onRouteChange}
      />
  );
}

export default App;
