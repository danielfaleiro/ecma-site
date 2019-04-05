import React from 'react';
import FirstButton from './FirstButton';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className='carousel'>
            <div class='carousel-container'>
                <p className='title hpa white roboto'>
                    Fisioterapia, Pilates e Personal Trainer em um único lugar
                </p>
                <p className='subtitle hpa white lato'>
                    Temos a soluãço completa para sua saúde e bem-estar.
                </p>
                <FirstButton />
            </div>
        </div>
    );
}

export default Carousel;