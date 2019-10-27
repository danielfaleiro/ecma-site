import React from 'react';
import './Introduction.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Introduction = () => {
    return (
        <div className='intro-container min-max-width section-vpa section-container center flex-row'>
            <ScrollAnimation animateIn="slideInLeft" animateOnce={true} className='flex-column intro-title-container'>
                <p id='intro-1' className='color-ecma-gold roboto intro-title'>
                    <span className='overpass-mono'>+</span> Resultados
                </p>
                <p id='intro-2' className='color-ecma-gold roboto intro-title'>
                    <span className='overpass-mono'>+</span> Cuidado
                </p>
                <p id='intro-3' className='moon-gray roboto intro-title'>
                    <span className='overpass-mono'>-</span> Modismo
                </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='intro-text-container flex flex-column flex-nowrap'>
                <p className='intro-text roboto'>
                  O ECMA – <strong>Espaço Clínico Raydel Marques</strong>, busca não somente oferecer serviços no cuidado a saúde, mas também propor umaexperiência em busca do reequilíbrio do corpo de forma humanizada.
                </p>
                <p className='intro-text roboto'>
                  Enquanto metodologia nos identificamos com a <strong>saúde clássica</strong>, o que significa que nossa abordagem considera os métodos das medicinas tradicionais e recursos da saúde humanizada e natural, com ênfase nos aspectos de atenção ao próximo.
                </p>
                <p className='intro-text roboto'>
                  “<strong>Clássicos</strong> são admirados não porque são antigos, mas porque continuam sendo verdadeiros com pessoas de muitas épocas, culturas e idiomas”.
                </p>
            </ScrollAnimation>
        </div>
    );
}


export default Introduction;