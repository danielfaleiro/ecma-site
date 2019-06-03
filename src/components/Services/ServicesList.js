import React from 'react';
import './ServicesList.css';
import links from '../../links';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const ServicesList = () => {
    return (
        <div className='section-container section-vpa services-container'>
            <div className='min-max-width center flex-column tc'>
                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                    <h1 className='hma services-title lato'>
                        Nossos Serviços
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className='hma center flex-row flex-wrap'>
                    <Link id='fisioterapia-bt' to={links.services.fisio} onClick={onRouteChange} className='hma services-bt white lato b'>
                        <span className='services-bt-text'>FISIOTERAPIA</span>
                    </Link>
                    <Link id='osteopatia-bt' to={links.services.osteo} onClick={onRouteChange} className='hma services-bt white lato b'>
                        <span className='services-bt-text'>OSTEOPATIA</span>
                    </Link>
                    <Link id='pilates-bt' to={links.services.pilates} onClick={onRouteChange} className='hma services-bt white lato b'>
                        <span className='services-bt-text'>PILATES CLÁSSICO</span>
                    </Link>
                    <Link id='treinamento-bt' to={links.services.training} onClick={onRouteChange} className='hma services-bt white lato b'>
                        <span className='services-bt-text'>TREINAMENTO FÍSICO</span>
                    </Link>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default ServicesList;