import React from 'react';
import Testmony from './Testmony';

const Testimonials = () => {
    return (
        <div className="section-container center flex-wrap section-vpa flex-column min-max-width tc">
            <div className='hma title color-ecma-gold lato'>Depoimentos</div>
            <div className='flex justify-between flex-wrap flex-row ts'>
                <Testmony id='0' />
                <Testmony id='1' />
                <Testmony id='2' />
            </div>

        </div>

    );
}

export default Testimonials;