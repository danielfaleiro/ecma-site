import React, { Component } from 'react';
import './TeamCard.css';

class TeamCard extends Component {
    componentDidMount() {
        const index = this.props.index;
        const memberCard = document.getElementById(`member${index}`);
        const memberInfo = document.getElementById(`memberInfo${index}`);

        if (index % 2 === 0) {
            memberCard.classList.add("flex-row-reverse");
            memberInfo.classList.add("flex-row-reverse");
        } else {
            memberCard.classList.add("flex-row");
            memberInfo.classList.add("flex-row");
        }
    }

    render() {
        const { index, name, job, credentials, phone, email } = this.props;
        return (
            <div id={`member${index}`} className='min-max-width start flex-wrap member-container lato'>
                <div className='member-photo center'>Foto</div>
                <div id={`memberInfo${index}`} className='member-info center flex-wrap'>
                    <div className='member-info-1'>
                        <h2>{name}</h2>
                        <p className='member-text'>
                            {job}
                        </p>
                        <p>
                            {credentials}
                        </p>
                    </div>
                    <div className='member-info-2 ts start flex-column'>
                        <span>
                            <p><strong>Telefone:</strong></p>
                            <p>{phone}</p>
                        </span>
                        <span>
                            <p><strong>E-mail:</strong></p>
                            <p><a href={'mailto:' + email}>{email}</a></p>
                        </span>
                    </div>
                    <div className='member-info-3'>
                        Texto
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamCard;