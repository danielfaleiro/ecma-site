import React from 'react';
import FisioImg from '../Services/fisioterapia.jpg';
import OsteoImg from '../Services/osteopatia.jpg';
import PilatesImg from '../Services/pilates.jpg';
import TreinoImg from '../Services/treinamento.jpg';
import ServiceCard from './ServiceCard';
import links from '../../links';

const ServicesPage = ({onRouteChange}) => {
    return (
        <div className='top-page container-tpa center flex-nowrap flex-column section-container section-ma lato'>
            <div className='min-max-width tc title color-ecma-gold hma'>Nossos Serviços</div>
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