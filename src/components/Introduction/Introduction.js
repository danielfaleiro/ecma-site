import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <div className='max-width intro-container center'>
            <div className='flex flex-column flex-nowrap'>
                <p className='hma color-ecma-gold roboto title intro-title'>
                    <span className='overpass-mono'>+</span> Resultados
                </p>
                <p className='hma color-ecma-gold roboto title intro-title'>
                    <span className='overpass-mono'>+</span> Cuidado
                </p>
                <p className='hma moon-gray roboto title intro-title'>
                    <span className='overpass-mono'>-</span> Modismo
                </p>
            </div>
            <div className='intro-text-container flex flex-column flex-nowrap'>
                <p className='intro-text roboto'>
                    A <span className='color-ecma-gold'>ECMA</span> ... nunc in bibendum libero. Donec molestie non erat sed rutrum. Cras vulputate elementum posuere. Sed vel odio quis elit scelerisque tincidunt sit amet sed ipsum. Praesent sollicitudin quis sapien at mollis. Maecenas vel consequat mauris. Nam fermentum facilisis quam ut auctor.
                </p>
                <p className='intro-text roboto'>
                    Mauris lacinia erat ac orci molestie pellentesque. In quis malesuada est. Sed ut velit vehicula, malesuada lorem et, hendrerit metus. Cras sodales gravida arcu facilisis aliquet. Nam sed faucibus ipsum. Aliquam blandit dui sed scelerisque cursus. Duis viverra, nulla id mattis semper, quam lacus iaculis tellus, nec ornare diam elit id nulla. Suspendisse at massa diam. Sed scelerisque feugiat dui nec mollis. Curabitur finibus laoreet tortor et imperdiet. Vestibulum accumsan sodales risus ac sollicitudin.
                </p>
            </div>
        </div>
    );
}


export default Introduction;