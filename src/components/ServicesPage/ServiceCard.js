import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({img, title, text}) => {
    return (
        <div className='card-container ma3 flex flex-row flex-wrap'>
            <img className='card-img' src={img} alt={title} />
            <div className='card-info start flex-column flex-nowrap'>
                <h3>{title}</h3>
                <p style={{flexGrow: 1}}>{text}</p>
                <div className='button white card-button self-end'>Saiba mais</div>
            </div>
        </div>
    );
}

export default ServiceCard;