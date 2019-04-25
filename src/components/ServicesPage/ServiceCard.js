import React from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({img, title, text, route, onRouteChange}) => {
    return (
        <div className='card-container ma3 flex flex-row flex-wrap'>
            <img className='card-img' src={img} alt={title} />
            <div className='card-info start flex-column flex-nowrap'>
                <h3>{title}</h3>
                <p style={{flexGrow: 1}}>{text}</p>
                <Link to={route}>
                    <div onClick={onRouteChange} className='button white card-button self-end'>
                        Saiba mais
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;