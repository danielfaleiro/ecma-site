import React, { Component } from 'react';
import './ServiceCard.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import AnchorButton from '../AnchorButton/AnchorButton';

class ServiceCard extends Component {
    componentDidMount() {
        const { flip, title } = this.props;
        const cardOuter = document.getElementById(`cardOuter${title}`);
        const cardInner = document.getElementById(`cardInner${title}`);

        if (flip) {
            cardInner.classList.add('card-flip');
        } else {
            cardOuter.classList.add('flex-row');
            cardOuter.classList.add('card-container-bg');
        }
    }

    render() {
        const { title, img, text, route } = this.props;
        return (
            <div id={`cardOuter${title}`} className='card-container'>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div id={`cardInner${title}`} className='card-inner center min-max-width'>
                        <img className='card-img' src={img} alt={title} />
                        <div className='card-info start flex-column flex-nowrap'>
                            <h3>{title}</h3>
                            <p className='text' style={{flexGrow: 1}}>{text}</p>
                            <AnchorButton to={route} className='self-start card-button' text={'Saiba mais'} />
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        );
    }
}

export default ServiceCard;