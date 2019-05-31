import React, { Component } from 'react';
import './ServiceCard.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import AnchorButton from '../AnchorButton/AnchorButton';

class ServiceCard extends Component {
    render() {
        const { title, img, text, route } = this.props;
        return (
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='card-outer min-max-width'>
                <div id={`cardInner${title}`} className='card-inner start'>
                    <img className='card-img' src={img} alt={title} />
                    <div className='card-info start flex-column flex-nowrap'>
                        <h3>{title}</h3>
                        <p className='text'>{text}</p>
                        <AnchorButton to={route} className='card-button' text={'Saiba mais'} />
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default ServiceCard;