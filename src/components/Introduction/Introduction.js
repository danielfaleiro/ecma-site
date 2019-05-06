import React from 'react';
import './Introduction.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Introduction = () => {
    return (
        <div className='min-max-width section-vpa section-container center flex-row flex-wrap'>
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} className='center items-start flex-column intro-title-container'>
                <p id='intro-1' className='hma color-ecma-gold roboto intro-title'>
                    <span className='overpass-mono'>+</span> Resultados
                </p>
                <p id='intro-2' className='hma color-ecma-gold roboto intro-title'>
                    <span className='overpass-mono'>+</span> Cuidado
                </p>
                <p id='intro-3' className='hma moon-gray roboto intro-title'>
                    <span className='overpass-mono'>-</span> Modismo
                </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='intro-text-container flex flex-column flex-nowrap'>
                <p className='hma intro-text roboto'>
                    A <span className='color-ecma-gold'>ECMA</span> ... nunc in bibendum libero. Donec molestie non erat sed rutrum. Cras vulputate elementum posuere. Sed vel odio quis elit scelerisque tincidunt sit amet sed ipsum. Praesent sollicitudin quis sapien at mollis. Maecenas vel consequat mauris. Nam fermentum facilisis quam ut auctor.
                </p>
                <p className='hma intro-text roboto'>
                    Mauris lacinia erat ac orci molestie pellentesque. In quis malesuada est. Sed ut velit vehicula, malesuada lorem et, hendrerit metus. Cras sodales gravida arcu facilisis aliquet. Nam sed faucibus ipsum. Aliquam blandit dui sed scelerisque cursus. Duis viverra, nulla id mattis semper, quam lacus iaculis tellus, nec ornare diam elit id nulla. Suspendisse at massa diam. Sed scelerisque feugiat dui nec mollis. Curabitur finibus laoreet tortor et imperdiet. Vestibulum accumsan sodales risus ac sollicitudin.
                </p>
            </ScrollAnimation>
        </div>
    );
}


export default Introduction;