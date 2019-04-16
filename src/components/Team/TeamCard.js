import React from 'react';
import './TeamCard.css';

const TeamCard = ({name, job, credentials, phone, email}) => {
    return (
        <div className='member-container roboto color-default'>
            <div className='member-photo'></div>
            <div className='mh3'>
                <h3>{name}</h3>
                <p>{job}</p>
                <p>{credentials}</p>
                <p className='mt4'><strong>Telefone:</strong></p>
                <p>{phone}</p>
                <p><strong>E-mail:</strong></p>
                <p><a href={'mailto:' + email}>{email}</a></p>
            </div>
        </div>
    );
}

export default TeamCard;