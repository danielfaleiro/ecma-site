import React from 'react';
import Testmony from './Testmony';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Testimonials = () => {
    return (
        <div className="section-container center flex-wrap section-vpa flex-column min-max-width tc">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <h1 className='hma color-ecma-gold lato'>Depoimentos</h1>
            </ScrollAnimation>  
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className='flex justify-between flex-wrap flex-row ts'>
                <Testmony id='0' />
                <Testmony id='1' />
                <Testmony id='2' />
            </ScrollAnimation>

        </div>

    );
}

export default Testimonials;