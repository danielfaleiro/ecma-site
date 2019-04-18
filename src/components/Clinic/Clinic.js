import React from 'react';
import './Clinic.css';
import IconCard from './IconCard';

const Clinic = () => {
    const vision = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ipsum erat, mattis nec nibh vitae, scelerisque maximus quam. Nunc suscipit, risus et laoreet vulputate, est ex dictum mauris, et consectetur.';
    const mission = vision;
    const values = vision;
    return (
        <div className='hma'>
            <div className='center min-max-width clinic-container center flex-column lato'>
                <div className='tc title color-ecma-gold'>Bem-vindo ao ECMA</div>
                <p className='section-subtitle tc'>
                    Pensando em você, nosso cliente, buscamos um meio de oferecer serviços de saúde 
                    através da medicina alternativa, mas com um contexto voltado para o ser humano. 
                    Assim nasce uma idéia e o ECMA – Espaço Clínico Raydel Marques busca não somente 
                    oferecer serviços de saúde, qualidade de vida, mas também propor recursos em busca 
                    do reequilíbrio da saúde de forma humanizada.
                </p>
                <div className='center flex-row flex-wrap container-vpa'>
                    <div className='clinic-panel clinic-img'>
                    </div>
                    <div className='clinic-panel'>
                        <h3 className='lato'>FILOSOFIA</h3>
                        <p className='text'>
                            Sua saúde estará nas mãos de ótimos profissionais. O que estes tem em comum 
                            é uma visão clássica de saúde.
                        </p>
                        <p className='text'>
                            A Filosofia de Saúde do ECMA considera que a qualidade de vida clássica está firmemente 
                            enraizada na busca de um equilíbrio da saúde do Corpo, da mental e do espírito, com o 
                            enriquecimento da vida social, na conservação da riqueza teológica e moral. Vemos a 
                            verdadeira saúde em um corpo sendo uma só unidade, onde todos os fatores internos e 
                            externos podem influenciar no seu desequilíbrio. “Clássicos são admirados não porque são 
                            antigos; em vez disso, são clássicos porque continuam a ser verdadeiros com pessoas de 
                            muitas épocas, culturas e idiomas”.
                        </p>
                    </div>
                    <div className='clinic-panel'>
                        <h3 className='lato'>METODOLOGIA DE TRABALHO</h3>
                        <p className='text'>
                            Somos uma clínica de saúde que visa equilíbrio e qualidade de vida. Portanto, a nossa 
                            confessionalidade se expressa diretamente em nossas ações e no elo entre terapeuta e cliente. 
                            Ser uma clínica com bases cristãs é olhar para a tríade do ser humano e usá-la como os 
                            instrumento necessário para busca do todo que pode estar interferindo em seu corpo e 
                            buscar<span className='red'>... (texto incompleto)</span>  
                        </p>
                    </div>
                    <div className='clinic-panel clinic-img'>
                    </div>
                </div>
                <div className='center flex-row flex-wrap container-vpa'>
                    <IconCard icon='eye' size='4em' title='Visão' text={vision} />
                    <IconCard icon='star' size='4em' title='Missão' text={mission} />
                    <IconCard icon='heart' size='4em' title='Valores' text={values} />
                </div>
            </div>
        </div>
    );
}

export default Clinic;