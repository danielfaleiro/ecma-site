import React from 'react';
import FirstButton from './FirstButton';
import './Carousel.css';
import links from '../../links';
import Slider from "react-slick";


const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
      };

    return (
        <div id='carousel' className='carousel top-page'>
            <Slider {...settings}>
                <div className='carousel-container'>
                    <h1 className='carousel-title mb0 hpa white roboto'>
                        Fisioterapia, Pilates e Personal Trainer em um único lugar
                    </h1>
                    <p className='carousel-subtitle hpa white lato'>
                        Temos a solução completa para sua saúde e bem-estar.
                    </p>
                    <FirstButton destination={links.services.self} text={'Conheça Nossas Especialidades'}/>
                </div>
            </Slider>
            
        </div>
    );
}

export default Carousel;