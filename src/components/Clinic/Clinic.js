import React from 'react';
import './Clinic.css';
import IconCard from './IconCard';

const Clinic = () => {
    const vision = 'Atendimento humanizado com foco na tríade do ser humano.';
    const mission = 'Ser um espaço modelo para promoção da saúde reequilíbrio do corpo da alma e do espirito.';
    const values = 'Exposição da fé nas ações, exercer empatia e demonstrar ações de humanização.';
    return (
        <div id='clinicPage' className='hma top-page container-tpa'>
            <div className='center min-max-width clinic-container center flex-column lato'>
                <div className='tc title color-ecma-gold'>Bem-vindo ao ECMA</div>
                <p className='section-subtitle tc'>
                Pensando em você, nosso cliente, buscamos um meio de oferecer serviços de saúde e qualidade de vida, 
                mas com um contexto voltado para a tríade do ser humano. Assim nasce o ECMA – <strong></strong>Espaço Clínico Raydel 
                Marques, que busca não somente oferecer serviços, mas também propor uma experiencia em busca do 
                reequilíbrio da saúde de forma humanizada. 
                </p>
                <div className='center flex-row flex-wrap container-vpa'>
                    <div className='clinic-panel clinic-img'>
                    </div>
                    <div className='clinic-panel'>
                        <h2 className='lato'>FILOSOFIA</h2>
                        <p className='text'>
                            Sua saúde estará nas mãos de ótimos profissionais. O que estes tem em comum 
                            é uma visão clássica de saúde.
                        </p>
                        <p className='text'>
                            A Filosofia de saúde do ECMA considera que a qualidade de vida está firmemente enraizada na 
                            busca de um equilíbrio da saúde do <strong>corpo</strong>, da <strong>mente</strong> e do <strong>espírito</strong>. 
                            O enriquecimento da vida social, emocional com a conservação da 
                            riqueza teológica e moral, nos faz olhar para o corpo como uma só <strong>unidade</strong>, 
                            onde a saúde é influenciada pelos fatores internos e externos podendo gerar um desequilíbrio.
                            “Clássicos são admirados não porque são antigos; em vez disso, são clássicos porque continuam 
                            a ser verdadeiros com pessoas de muitas épocas, culturas e idiomas”. 
                        </p>
                    </div>
                    <div className='clinic-panel'>
                        <h2 className='lato'>METODOLOGIA DE TRABALHO</h2>
                        <p className='text'>
                            Somos um <strong>espaço de saúde clássica</strong>.  
                        </p>
                        <p className='text'>
                            Ser um espaço de saúde é buscar e apresentar meios de gerar equilíbrio para o corpo. Portanto, 
                            a nossa confessionalidade se expressa diretamente em nossas ações e elo entre terapeuta e cliente. 
                            Assim, buscamos identificar os campos a serem trabalhados em nossos clientes, respeitando e 
                            incentivando esses aspectos, mas também respeitando sua fé.
                        </p>
                        <p className='text'>
                            Ser um espaço com bases cristãs é olhar para a tríade do ser humano e usá-las com os instrumentos 
                            necessários para identificar aquilo que possa estar interferindo no equilíbrio da saúde e bem-estar 
                            dos nossos clientes. O espaço ECMA apresenta em suas ações o que é um ser cristão, com amor ao próximo, 
                            compaixão, servir e demonstrando empatia. 
                        </p>
                        <p className='text'>
                            Enquanto metodologia nos identificamos com a <strong>saúde clássica</strong>, isso significa que nossa 
                            abordagem se dá pelos métodos das medicinas tradicionais e recursos da saúde humanizada e natural. Com 
                            ênfase nos aspectos de atenção ao próximo. 
                        </p>
                        <p className='text'>
                            A saúde, vista por este ângulo, nos faz perceber o ser humano como um todo e proporciona as duas partes 
                            uma experiencia de humanização e empatia. 
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