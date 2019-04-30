import React from 'react';
import './ServicesList.css';
import links from '../../links';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';

const ServicesList = () => {
    return (
        <div className='section-container section-vpa services-container'>
            <div className='min-max-width center flex-column tc'>
                <h1 className='hma services-title lato'>
                    Nossos Serviços
                </h1>
                <div className='center flex-row flex-wrap'>
                    <Link to={links.services.fisio}>
                        <button 
                            onClick={onRouteChange}
                            id='fisioterapia-bt'
                            className='hma services-bt white lato b'>
                            FISIOTERAPIA
                        </button>
                    </Link>
                    <Link to={links.services.osteo}>
                        <button 
                            onClick={onRouteChange}
                            id='osteopatia-bt'
                            className='hma services-bt white lato b'>
                            OSTEOPATIA
                        </button>
                    </Link>
                    <Link to={links.services.pilates}>
                        <button 
                            onClick={onRouteChange}
                            id='pilates-bt'
                            className='hma services-bt white lato b'>
                            PILATES TRADICIONAL
                        </button>
                    </Link>
                    <Link to={links.services.training}>
                        <button 
                            onClick={onRouteChange}
                            id='treinamento-bt'
                            className='hma services-bt white lato b'>
                            TREINAMENTO FÍSICO
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicesList;