import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='services-container'>
            <span className='max-width center flex-column tc'>
                <p className='hma title section-ma services-title'>
                    Nossos Serviços
                </p>
                <div className='center flex-row flex-wrap'>
                    <button id='fisioterapia-bt' className='hma services-bt white pointer lato b'>
                        FISIOTERAPIA
                    </button>
                    <button id='osteopatia-bt' className='hma services-bt white pointer lato b'>
                        OSTEOPATIA
                    </button>
                    <button id='pilates-bt' className='hma services-bt white pointer lato b'>
                        PILATES TRADICIONAL
                    </button>
                    <button id='treinamento-bt' className='hma services-bt white pointer lato b'>
                        TREINAMENTO FÍSICO
                    </button>
                </div>
            </span>
        </div>
    );
}

export default Services;