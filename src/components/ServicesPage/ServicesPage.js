import React from 'react';
import FisioImg from '../Services/fisioterapia.jpg';
import OsteoImg from '../Services/osteopatia.jpg';
import PilatesImg from '../Services/pilates.jpg';
import TreinoImg from '../Services/treinamento.jpg';
import ServiceCard from './ServiceCard';
import links from '../../links';

const ServicesPage = ({onRouteChange}) => {
    return (
        <div className='top-page container-tpa center flex-nowrap flex-column lato'>
            <h1 className='min-max-width tc color-ecma-gold hma'>Nossos Serviços</h1>
            <div className='center flex-row flex-wrap'>
                <ServiceCard
                    img={FisioImg}
                    title='FISIOTERAPIA'
                    route={links.services.fisio}
                    text='Texto'
                    flip={false}
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={OsteoImg}
                    title='OSTEOPATIA'
                    route={links.services.osteo}
                    text='Texto'
                    flip={true}
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={PilatesImg}
                    title='PILATES'
                    route={links.services.pilates}
                    text='Texto'
                    flip={false}
                    onRouteChange={onRouteChange}
                />
                <ServiceCard
                    img={TreinoImg}
                    title='TREINAMENTO FÍSICO'
                    route={links.services.training}
                    text='Texto'
                    flip={true}
                    onRouteChange={onRouteChange}
                />
            </div>
        </div>
    );
}

export default ServicesPage;