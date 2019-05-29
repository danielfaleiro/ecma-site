import React from 'react';
import TeamCard from './TeamCard';


const Team = () => {
    return (
        <div className='min-max-width top-page container-tpa center flex-column page-min-height'>
            <h1 className='color-ecma-gold tc lato'>Nossa Equipe</h1>
            <div className='hma mt3 flex justify-between flex-column flex-wrap'>
                <TeamCard
                    index={1}
                    name='RAYDEL MARQUES'
                    job='Fisioterapeuta'
                    credentials='CREFITO: 11/XXXXX-X'
                    phone='(62) XXXX-XXXX'
                    email='fisioterapia@espacoecma.com.br'
                />
                <TeamCard
                    index={2}
                    name='LUANA FALEIRO'
                    job='Educadora Física'
                    credentials='CREF XXXXXXX'
                    phone='(62) XXXX-XXXX'
                    email='treinamento@espacoecma.com.br'
                    flip={true}
                />
                <TeamCard
                    index={3}
                    name='NOME SOBRENOME'
                    job='Instrutora de Pilates'
                    credentials='Credencial'
                    phone='(62) XXXX-XXXX'
                    email='pilates@espacoecma.com.br'
                />
                <TeamCard
                    index={4}
                    name='NOME SOBRENOME'
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