import React, { Component } from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';

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
                <div id={`cardInner${title}`} className='card-inner center min-max-width'>
                    <img className='card-img' src={img} alt={title} />
                    <div className='card-info start flex-column flex-nowrap'>
                        <h2>{title}</h2>
                        <p className='text' style={{flexGrow: 1}}>{text}</p>
                        <Link to={route} className='start'>
                            <div onClick={onRouteChange} className='button white card-button self-center'>
                                Saiba mais
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServiceCard;