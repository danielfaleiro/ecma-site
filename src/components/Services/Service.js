import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';

const Service = ({name, image, others}) => {
    const otherServices = () => {
        const res = others.services.map( function(elem, index) {
            return (
                <Link
                    to={others.route[index]}
                    key={index}
                    onClick={onRouteChange}
                    className='services-bt white b lato'
                    style={{
                        backgroundImage: `url(${others.images[index]})`,
                        backgroundSize: '250px 250px'
                    }}
                >
                    <span className='services-bt-text'>
                        {elem.toUpperCase()}
                    </span> 
                </Link>
            );
        });
        return res;
    };

    return (
        <div className='top-page container-tpa'>
            <div className='hma min-max-width center flex-column section-container lato'>
                <h1 className='color-ecma-gold tc'>{name}</h1>
                <div className='start flex-column flex-wrap'>
                    <div className='start flex-wrap'>
                        <div className='service-text service-0'>
                            <h3>O QUE É?</h3>
                            <p>Texto</p>
                        </div>
                        <img src={`${image}`} alt='Fisioterapia' className='service-image' />
                        <div className='service-1 service-text'>
                            <h3>COMO FUNCIONA</h3>
                            <p>Texto</p>
                        </div>
                        <div className='service-2 service-text'>
                            <h3>PARA QUEM É INDICADO</h3>
                            <p>Texto</p>
                        </div>
                        <div className='service-3 service-text'>
                            <h3>CONTATO</h3>
                            <p>Texto</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-ecma-gray other-services section-container'>
                <div className='min-max-width center flex-column items-center'>
                    <h1 className='tc lato color-ecma-gray'>Conheça Também</h1>
                    <div className='center flex-row flex-wrap'>
                        {otherServices()}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Service;