import React from 'react';
import './Clinic.css';
import IconCard from './IconCard';
import links from '../../links';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Anchor from '../Anchor/Anchor';

const Clinic = () => {
    const vision = <span>Atendimento <strong>humanizado</strong> com foco na <strong>tríade</strong> (corpo, mente e espírito) do ser humano.</span>;
    const mission = <span>Ser um espaço modelo para <strong>promoção</strong> da saúde e <strong>reequilíbrio</strong> do corpo, mente e espírito.</span>;
    const values = <span>Expressão da <strong>fé</strong> nas ações, exercendo a <strong>empatia</strong> e propiciando a <strong>humanização</strong> nas interações.</span>;

    return (
        <div id='clinicPage' className='top-page container-tpa page-min-height'>
            <div className='center min-max-width clinic-container center flex-column lato'>
                <h1 className='tc color-ecma-gold'>Bem-vindo ao ECMA</h1>
                <p className='hm-default section-subtitle tc'>
                Pensando em você, nosso cliente, oferecemos serviços de saúde e qualidade de vida, mas com foco na tríade 
                (corpo, mente e espírito) do ser humano. Assim nasce o ECMA – <strong>Espaço Clínico Raydel Marques</strong>, que busca não 
                somente oferecer serviços, mas também propor uma experiência em busca do reequilíbrio da saúde de forma humanizada.  
                </p>
                <div className='center flex-row flex-wrap container-vpa'>
                    <ScrollAnimation animateIn="slideInLeft" animateOnce={true} className='clinic-panel clinic-img' />
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='clinic-panel'>
                        <h3 className='lato'>FILOSOFIA</h3>
                        <p className='text'><em>
                            Sua saúde estará nas mãos de ótimos profissionais, que têm em comum é uma visão clássica de saúde.
                        </em></p>
                        <p className='text'>
                            A Filosofia do ECMA considera que a qualidade de vida está firmemente enraizada na busca de um equilíbrio 
                            da <strong>saúde</strong> do corpo, da mente e do espírito. O desenvolvimento da vida social e emocional com a conservação 
                            da riqueza teológica e moral, nos faz olhar para o corpo como uma só <strong>unidade</strong>, onde a saúde é influenciada 
                            pelos fatores internos e externos, podendo sofrer desequilíbrios. “<strong>Clássicos</strong> são admirados não porque são 
                            antigos, mas porque continuam sendo verdadeiros com pessoas de muitas épocas, culturas e idiomas”.  
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='clinic-panel'>
                        <h3 className='lato'>METODOLOGIA DE TRABALHO</h3>
                        <p className='text'><em>
                            Somos um <strong>Espaço de Saúde Clássica</strong>.  
                        </em></p>
                        <p className='text'>
                            Buscamos e apresentamos meios de gerar equilíbrio para o corpo. Portanto, a <Anchor to={links.faith}>nossa confessionalidade</Anchor> é expressada diretamente 
                            em nossas ações e no elo entre terapeuta e cliente. Assim, identificamos os campos a serem trabalhados em nossos clientes, 
                            respeitando e incentivando esses aspectos e também sua fé.
                        </p>
                        <p className='text'>
                            Ser um Espaço com bases cristãs é olhar para a tríade (corpo, mente e espírito) do ser humano e utilizar os instrumentos necessários para identificar aquilo que 
                            possa estar interferindo no equilíbrio da saúde e bem-estar dos nossos clientes. O Espaço ECMA apresenta em suas ações o que é um ser cristão, com <strong>amor</strong> ao próximo, 
                            <strong> compaixão</strong> e <strong>servir</strong>. 
                        </p>
                        <p className='text'>
                            Enquanto metodologia nos identificamos com a <strong>saúde clássica</strong>, o que significa que nossa abordagem considera os métodos das medicinas 
                            tradicionais e recursos da saúde humanizada e natural, com ênfase nos aspectos de atenção ao próximo. 
                        </p>
                        <p className='text'>
                            A saúde, vista por esse ângulo, nos faz perceber o ser humano como um todo e proporciona as duas partes (profissional e cliente) uma <strong>experiência</strong> de 
                            humanização e <strong>empatia</strong>. 
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="slideInRight" animateOnce={true} className='clinic-panel clinic-img'>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='center flex-row flex-wrap container-vpa'>
                    <IconCard icon='eye' size='4em' title='Visão' text={vision} />
                    <IconCard icon='star' size='4em' title='Missão' text={mission} />
                    <IconCard icon='heart' size='4em' title='Valores' text={values} />
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Clinic;