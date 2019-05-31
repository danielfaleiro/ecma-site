import React from 'react';
import FisioImg from '../Services/fisioterapia.jpg';
import OsteoImg from '../Services/osteopatia.jpg';
import PilatesImg from '../Services/pilates.jpg';
import TreinoImg from '../Services/treinamento.jpg';
import ServiceCard from './ServiceCard';
import links from '../../links';

const ServicesPage = () => {
    return (
        <div className='top-page container-tpa center flex-nowrap flex-column lato page-min-height'>
            <h1 className='center min-max-width tc color-ecma-gold hma'>Nossos Serviços</h1>
            <div className='center flex-row flex-wrap'>
                <ServiceCard
                    img={FisioImg}
                    title='FISIOTERAPIA'
                    route={links.services.fisio}
                    text=' Área de atuação profissional e ciência que estuda, diagnostica, previne e restabelece as disfunções dos sistemas do corpo humano.'
                    flip={false}
                />
                <ServiceCard
                    img={OsteoImg}
                    title='OSTEOPATIA'
                    route={links.services.osteo}
                    text='É uma filosofia autônoma de cuidados de saúde primária, que usa métodos manuais para avaliar, diagnosticar e tratar disfunções dos sistemas corporais. Uma área de atuação profissional exclusiva para Fisioterapeutas.'
                    flip={true}
                />
                <ServiceCard
                    img={PilatesImg}
                    title='PILATES'
                    route={links.services.pilates}
                    text='Texto'
                    flip={false}
                />
                <ServiceCard
                    img={TreinoImg}
                    title='TREINAMENTO FÍSICO'
                    route={links.services.training}
                    text='Texto'
                    flip={true}
                />
            </div>
        </div>
    );
}

export default ServicesPage;