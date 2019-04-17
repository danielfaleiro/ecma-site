import React, { Component } from 'react';
import './App.css';
import fisioImg from './components/Services/fisioterapia.jpg'
import osteoImg from './components/Services/osteopatia.jpg'
import pilatesImg from './components/Services/pilates.jpg'
import treinoImg from './components/Services/treinamento.jpg'
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import Introduction from './components/Introduction/Introduction';
import ServicesList from './components/Services/ServicesList';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import ContactPage from './components/ContactPage/ContactPage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import Service from './components/Services/Service';
import Team from './components/Team/Team';
import Clinic from './components/Clinic/Clinic';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '/'
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
    window.scrollTo(0, 0);
  }

  render() {
    let displayContent;
    const route = this.state.route;

    if (route === '/') {
      displayContent = <>
                        <Carousel />
                        <Introduction />
                        <ServicesList onRouteChange={this.onRouteChange}/>
                        <Testimonials />
                       </>;
    } else if (route === 'clinica') {
      displayContent = <Clinic />;
    } else if (route === 'contact') {
      displayContent = <ContactPage />;
    } else if (route === 'equipe') {
      displayContent = <Team />;
    } else if (route === 'services') {
      displayContent = <ServicesPage onRouteChange={this.onRouteChange}/>;
    } else if (route === 'fisioterapia') {
      const others = {
        services: ['Osteopatia', 'Pilates', 'Treinamento Físico'],
        images: [osteoImg, pilatesImg, treinoImg],
        route: ['osteopatia', 'pilates', 'treinamento'],
      }
      displayContent = <Service
        name='Fisioterapia'
        image={fisioImg}
        others={others}
        onRouteChange={this.onRouteChange}
      />;
    } else if (route === 'osteopatia') {
      const others = {
        services: ['Fisioterapia', 'Pilates', 'Treinamento Físico'],
        images: [fisioImg, pilatesImg, treinoImg],
        route: ['fisioterapia', 'pilates', 'treinamento'],
      }
      displayContent = <Service
        name='Osteopatia'
        image={osteoImg}
        others={others}
        onRouteChange={this.onRouteChange}
      />;
    } else if (route === 'pilates') {
      const others = {
        services: ['Fisioterapia', 'Osteopatia', 'Treinamento Físico'],
        images: [fisioImg, osteoImg, treinoImg],
        route: ['fisioterapia', 'osteopatia', 'treinamento'],
      }
      displayContent = <Service
        name='Pilates'
        image={pilatesImg}
        others={others}
        onRouteChange={this.onRouteChange}
      />;
    } else if (route === 'treinamento') {
      const others = {
        services: ['Fisioterapia', 'Osteopatia', 'Pilates'],
        images: [fisioImg, osteoImg, pilatesImg],
        route: ['fisioterapia', 'osteopatia', 'pilates'],
      }
      displayContent = <Service
        name='Treinamento Físico'
        image={treinoImg}
        others={others}
        onRouteChange={this.onRouteChange}
      />;
    }
    return (
      <div>
        <NavBar onRouteChange={this.onRouteChange} />
        {displayContent}
        <Footer />
      </div>
    );
  }
}

export default App;
