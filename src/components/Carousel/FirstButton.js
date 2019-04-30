import React from 'react';
import { Link } from 'react-router-dom';

const FirstButton = ({ destination, text }) => {
    return (
        <Link to={destination} className='button cursor no-underline white lato hma'>
            {text}
        </Link>
         
    );
}

export default FirstButton;