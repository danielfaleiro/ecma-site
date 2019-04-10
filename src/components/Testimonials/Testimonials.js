import React from 'react';
import Testmony from './Testmony';

const Testimonials = () => {
    return (
        <div className="section-container center flex-wrap flex-column max-width tc">
            <p className='hma title color-ecma-gold lato'>Depoimentos</p>
            <div className='flex justify-between flex-wrap flex-row ts'>
                <Testmony id='0' />
                <Testmony id='1' />
                <Testmony id='2' />
            </div>

        </div>

    );
}

export default Testimonials;