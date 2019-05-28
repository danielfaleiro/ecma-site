import React from 'react';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';

const AnchorButton = ({ to, text, className}) => {
    if (className === undefined)
        className = 'button lato';
    else
        className = className + ' button lato';
    return (
        <Link className={className} to={to} onClick={onRouteChange}>
            {text}
        </Link>
    )
}

export default AnchorButton;