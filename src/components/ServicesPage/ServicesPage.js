import React from 'react';
import FisioImg from '../Services/fisioterapia.jpg';
import OsteoImg from '../Services/osteopatia.jpg';
import PilatesImg from '../Services/pilates.jpg';
import TreinoImg from '../Services/treinamento.jpg';
import ServiceCard from './ServiceCard';

const ServicesPage = () => {
    return (
        <div className='center flex-nowrap flex-column hma section-container section-ma max-width lato color-default'>
            <p className='tc title color-ecma-gold'>Nossos Serviços</p>
            <div className='center flex-row flex-wrap'>
                <ServiceCard img={FisioImg} title='Fisioterapia' text='Texto'/>
                <ServiceCard img={OsteoImg} title='Osteopatia' text='Texto'/>
                <ServiceCard img={PilatesImg} title='Pilates' text='Texto'/>
                <ServiceCard img={TreinoImg} title='Treinamento Físico' text='Texto'/>
            </div>
        </div>
    );
}

export default ServicesPage;