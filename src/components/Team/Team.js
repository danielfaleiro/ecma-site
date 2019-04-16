import React from 'react';
import TeamCard from './TeamCard';


const Team = () => {
    return (
        <div className='max-width section-container center flex-column'>
            <p className='title color-ecma-gold tc lato'>Nossa Equipe</p>
            <div className='hma flex justify-around flex-wrap'>
                <TeamCard
                    name='Raydel Marques'
                    job='Fisioterapeuta'
                    credentials='CREFITO: 11/XXXXX-X'
                    phone='(62) XXXX-XXXX'
                    email='fisioterapia@espacoecma.com.br'
                />
                <TeamCard
                    name='Luana Faleiro'
                    job='Educadora Física'
                    credentials='CREF XXXXXXX'
                    phone='(62) XXXX-XXXX'
                    email='treinamento@espacoecma.com.br'
                />
                <TeamCard
                    name='Nome'
                    job='Instrutora de Pilates'
                    credentials='Credencial'
                    phone='(62) XXXX-XXXX'
                    email='pilates@espacoecma.com.br'
                />
            </div>
        </div>
    );
}

export default Team;