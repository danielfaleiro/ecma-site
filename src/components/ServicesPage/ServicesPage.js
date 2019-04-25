import React from 'react';
import FisioImg from '../Services/fisioterapia.jpg';
import OsteoImg from '../Services/osteopatia.jpg';
import PilatesImg from '../Services/pilates.jpg';
import TreinoImg from '../Services/treinamento.jpg';
import ServiceCard from './ServiceCard';
import links from '../../links';

const ServicesPage = ({onRouteChange}) => {
    return (
        <div className='center top-page flex-nowrap flex-column hma section-container section-ma min-max-width lato'>
            <p className='tc title color-ecma-gold'>Nossos Serviços</p>
            <div className='center flex-row flex-wrap'>
                <ServiceCard
                    img={FisioImg}
                    title='Fisioterapia'
                    route={links.services.fisio}
                    text='Texto'
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={OsteoImg}
                    title='Osteopatia'
                    route={links.services.osteo}
                    text='Texto'
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={PilatesImg}
                    title='Pilates'
                    route={links.services.pilates}
                    text='Texto'
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={TreinoImg}
                    title='Treinamento Físico'
                    route={links.services.training}
                    text='Texto'
                    onRouteChange={onRouteChange}
                />
            </div>
        </div>
    );
}

export default ServicesPage;