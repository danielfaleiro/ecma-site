import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className='section-container services-container'>
            <div className='max-width center flex-column tc'>
                <p className='hma title services-title lato'>
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
            </div>
        </div>
    );
}

export default Services;