import React from 'react';
import FirstButton from './FirstButton';
import SlideButtons from './SlideButtons';
import './Carousel.css';


const Carousel = () => {
    return (
        <div className='carousel'>
            <div className='carousel-container'>
                <div className='max-width center flex-column flex-nowrap'>
                    <p className='title mb0 hpa white roboto'>
                        Fisioterapia, Pilates e Personal Trainer em um único lugar
                    </p>
                    <p className='subtitle hpa white lato'>
                        Temos a solução completa para sua saúde e bem-estar.
                    </p>
                    <FirstButton />
                </div>
                <SlideButtons />
            </div>
        </div>
    );
}

export default Carousel;