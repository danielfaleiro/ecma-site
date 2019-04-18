import React from 'react';
import './Service.css';

const Service = ({name, image, others, onRouteChange}) => {
    const otherServices = () => {
        const res = others.services.map( function(elem, index) {
            console.log(others.route[index]);
            return (
                <button 
                    key={index}
                    onClick={() => onRouteChange(others.route[index])}
                    className='services-bt white b lato' 
                    style={{
                        backgroundImage: `url(${others.images[index]})`,
                        backgroundSize: '250px 250px'
                    }}>
                    {elem.toUpperCase()}
                </button>
            );
        });
        return res;
    };

    return (
        <div className='hma top-page'>
            <div className='min-max-width center flex-column section-container lato'>
                <div className='service-title' style={{backgroundImage: `url(${image})`}}>
                    <p className='title white roboto tc'>{name}</p>
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
                <p className='tc title lato color-ecma-gold'>Conheça Também</p>
                <div className='center flex-row flex-wrap'>
                    {otherServices()}
                </div>
                
            </div>
        </div>
    );
}


export default Service;