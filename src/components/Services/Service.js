import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';

const Service = ({name, image, others}) => {
    const otherServices = () => {
        const res = others.services.map( function(elem, index) {
            return (
                <Link to={others.route[index]} key={index}>
                    <button
                        onClick={onRouteChange}
                        className='services-bt white b lato' 
                        style={{
                            backgroundImage: `url(${others.images[index]})`,
                            backgroundSize: '250px 250px'
                        }}>
                        {elem.toUpperCase()}
                    </button>
                </Link>
            );
        });
        return res;
    };

    return (
        <div className='hma top-page container-tpa'>
            <div className='min-max-width center flex-column section-container lato'>
                <div className='service-title' style={{backgroundImage: `url(${image})`}}>
                    <h1 className='white roboto tc'>{name}</h1>
                </div>
                <div className='start flex-row flex-wrap'>
                    <div className='service-column-1'>
                        <h1>{name} - O que é?</h1>
                        <p>Texto</p>
                        <h1>Como funciona</h1>
                        <p>Texto</p>
                    </div>
                    <div className='service-column-2'>
                        <h1>Para quem é indicado</h1>
                        <p>Texto</p>
                    </div>
                </div>
            </div>
            <div className='min-max-width other-services section-container center flex-column items-center'>
                <h1 className='tc lato color-ecma-gold'>Conheça Também</h1>
                <div className='center flex-row flex-wrap'>
                    {otherServices()}
                </div>
                
            </div>
        </div>
    );
}


export default Service;