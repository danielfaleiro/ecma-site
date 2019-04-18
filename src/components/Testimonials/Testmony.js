import React from 'react';
import data from './data';
import './Testmony.css'

const Testmony = (props) => {
    const id = props.id;
    return (
        <div className='testmony tl'>
            <h5 className='color-ecma-gold lato hma'>{data[id].name}</h5>
            <p className='roboto hma'>{data[id].testmony}</p>
        </div>
    );
}

export default Testmony;