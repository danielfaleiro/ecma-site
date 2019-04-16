import React from 'react';
import './ServicesList.css';

const ServicesList = ({onRouteChange}) => {
    return (
        <div className='section-container services-container'>
            <div className='max-width center flex-column tc'>
                <p className='hma title services-title lato'>
                    Nossos Serviços
                </p>
                <div className='center flex-row flex-wrap'>
                    <button 
                        onClick={() => onRouteChange('fisioterapia')}
                        id='fisioterapia-bt'
                        className='hma services-bt white lato b'>
                        FISIOTERAPIA
                    </button>
                    <button 
                        onClick={() => onRouteChange('osteopatia')}
                        id='osteopatia-bt'
                        className='hma services-bt white lato b'>
                        OSTEOPATIA
                    </button>
                    <button 
                        onClick={() => onRouteChange('pilates')}
                        id='pilates-bt'
                        className='hma services-bt white lato b'>
                        PILATES TRADICIONAL
                    </button>
                    <button 
                        onClick={() => onRouteChange('treinamento')}
                        id='treinamento-bt'
                        className='hma services-bt white lato b'>
                        TREINAMENTO FÍSICO
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServicesList;