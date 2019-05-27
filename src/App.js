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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import links from './links'
import NotFoundPage from './components/404/404';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='color-default'>
          <NavBar/>
          <Switch>
            <Route exact path={links.home} component={Home}/>
            <Route path={links.clinic} component={Clinic} />
            <Route path={links.faith} component={Faith} />
            <Route path={links.team} component={Team} />
            <Route exact path={links.services.self} component={ServicesPage} />
            <Route path={links.services.fisio} component={Fisio}/>
            <Route path={links.services.osteo} component={Osteo}/>
            <Route path={links.services.pilates} component={Pilates}/>
            <Route path={links.services.training} component={Training}/>
            <Route path={links.contact} component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const Fisio = () => {
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
    />
  );
}

const Osteo = () => {
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
      />
  );
}

const Pilates = () => {
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
      />
  );
}

const Training = () => {
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
      />
  );
}

export default App;
