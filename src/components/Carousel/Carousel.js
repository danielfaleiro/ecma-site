import React from 'react';
import './Carousel.css';
import links from '../../links';
import Slider from "react-slick";
import AnchorButton from '../AnchorButton/AnchorButton';

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        appendDots: dots => (
          <div
            style={{
              position: "relative",
              top: "-45px",
              padding: "10px",
            }}
          >
            <ul 
              style={{
                margin: "0px",
                paddingInlineStart: "0",
              }}
            > {dots} </ul>
          </div>
        ),
      };

    return (
        <div id='carousel' className='carousel top-page'>
            <Slider {...settings}>
                <div className='carousel-container'>
                    <div className='min-max-width center flex-column'>
                        <h1 className='carousel-title mb0 hpa white roboto'>
                            Fisioterapia, Pilates e Personal Trainer em um único lugar
                        </h1>
                        <p className='carousel-subtitle hpa white lato'>
                            Temos a solução completa para sua saúde e bem-estar.
                        </p>
                        <AnchorButton className='hma' to={links.services.self} text={'Conheça Nossas Especialidades'}/>
                    </div>
                </div>
            </Slider>
            
        </div>
    );
}

export default Carousel;