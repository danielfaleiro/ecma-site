import React, { Component } from 'react';
import './TeamCard.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class TeamCard extends Component {
    componentDidMount() {
        const index = this.props.index;
        const memberCard = document.getElementById(`member${index}`);
        const memberInfo = document.getElementById(`memberInfo${index}`);

        if (index % 2 === 0) {
            memberCard.classList.add("team-left");
            memberInfo.classList.add("team-left");
        } else {
            memberCard.classList.add("team-right");
            memberInfo.classList.add("team-right");
        }
    }

    render() {
        const { index, name, job, credentials, phone, email, photo, text } = this.props;
        return (
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div id={`member${index}`} className='min-max-width start flex-wrap member-container lato'>
                    <img className='member-photo center' src={photo} alt={name} />
                    <div id={`memberInfo${index}`} className='member-info center flex-wrap'>
                        <span className={index % 2 === 0? 'triangle-right' : 'triangle-left'}></span>
                        <div className='member-info-1'>
                            <h2>{name}</h2>
                            <div>
                                <p className='member-text'>
                                    {job}
                                </p>
                                <p>
                                    {credentials}
                                </p>
                            </div>
                        </div>
                        <div className='member-info-2 ts start flex-column'>
                            <span>
                                <p><strong>Telefone:</strong></p>
                                <p><a href={phone[0]}>{phone[1]}</a></p>
                            </span>
                            <span>
                                <p><strong>E-mail:</strong></p>
                                <p><a href={'mailto:' + email}>{email}</a></p>
                            </span>
                        </div>
                        <div className='member-info-3'>
                            {text}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        );
    }
}

export default TeamCard;