import React from 'react';
import './Clinic.css';
import IconCard from './IconCard';
import links from '../../links';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Anchor from '../Anchor/Anchor';
import clinica1 from './clinica1.jpg';
import clinica2 from './clinica2.jpg';
import clinica3 from './clinica3.jpg';

const Clinic = () => {
    const showMore = () => {
        const hidden = document.getElementById('clinic-hidden');
        const button = document.getElementById('clinic-button');

        if (hidden.classList.contains('clinic-hidden')) {
            hidden.classList.remove('clinic-hidden');
            button.innerHTML = 'Mostrar menos';
        } else {
            hidden.classList.add('clinic-hidden');
            button.innerHTML = 'Mostrar mais';

            const history = document.getElementsByClassName('clinic-history')[0];
            history.scrollIntoView({ block: 'end', behavior: 'smooth' });
        }       
    }

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
                    <ScrollAnimation animateIn="slideInLeft" animateOnce={true} className='clinic-panel clinic-img'>
                      <img src={clinica1} alt="Foto do Espaço Clínico Raydel Marques"></img>
                    </ScrollAnimation>
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
                      <img src={clinica2} alt="Foto do Espaço Clínico Raydel Marques"></img>
                      <img src={clinica3} alt="Foto do Espaço Clínico Raydel Marques"></img>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='clinic-history'>
                        <span>
                            <h3 className='lato'>NOSSA HISTÓRIA</h3>
                            <p className='text'>
                                Foi no Clube de Engenharia de Goiás (CENG), que percebi a <strong>oportunidade</strong> de negócio, vendo a necessidade de um <strong>consultório de fisioterapia</strong> que atendesse os sócios em seu 
                                ambiente de lazer, uma ideia que surgiu antes da minha graduação. Sou Raydel Marques e a história do ECMA se iniciou em 2011, imediatamente após minha formação acadêmica.
                            </p>
                            <p className='text'>
                                Vi um público que necessitava de um atendimento <strong>fisioterapêutico particular</strong> e em períodos especiais, após o horário comercial. Já no primeiro semestre de 2011, apresentei 
                                à diretoria do Clube meu projeto, aproveitei um espaço já pronto e investi de forma tímida em meu negócio utilizando o valor da rescisão do contrato trabalhista com o CENG. 
                                Iniciei os serviços de Fisioterapia no segundo semestre desse mesmo ano.
                            </p>
                        </span>
                        <span id='clinic-hidden' className='clinic-hidden'>
                            <p className='text'>
                                Com poucos recursos e materiais, os atendimentos eram realizados de forma individualizada e com equipamentos básicos da fisioterapia. Porém, contava com um <strong>diferencial</strong>: 
                                uso dos espaços externos do clube como: academia, piscinas, quadras e campos sem custos adicionais para o meu negócio. Com serviços de reabilitação em traumatologia, 
                                ortopedia e lesões desportivas, pude colocar em prática os conhecimentos adquiridos.  
                            </p>
                            <p className='text'>
                                Ainda de forma tímida e simples com atendimentos individuais, busquei investir e me dedicar à profissão na qual me formei, criando minha rede de contatos e me aperfeiçoando 
                                com cursos de qualificação no setor que prestava serviços. Após um ano de implantação do consultório a <strong>ideia</strong> estava dando certo e foi necessário ampliar os atendimentos, uma 
                                vez que os pacientes, até então empresários do ramo de construção, tinham disponibilidade para receber os serviços em horários não comerciais. 
                            </p>
                            <p className='text'>
                                Com recursos advindos do acerto trabalhista com a faculdade UNIVERSO, no mês de abril de 2012, investi nos equipamentos que faltavam, adquiri mais um leito e conquistei 
                                um espaço maior, por meio dos antigos e novos pacientes. Passando a atender duas pessoas por sessão em um espaço mais amplo. 
                            </p>
                            <p className='text'>
                                No ano de 2013, o desejo de crescimento e de uma oportunidade de ampliação me impulsionaram para a busca de <strong>renovação</strong>. A ideia era ampliar os serviços de fisioterapia com mais 
                                equipamentos, mais leitos de atendimento, e implementar um espaço de Pilates nas dependências do Clube. E com esse objetivo, apresentei um Projeto (Proposta de Ampliação e Implantação) aos 
                                Diretores do Clube, incluindo dados estatísticos de resultados conquistados e pesquisa de campo interno. Consegui a aprovação para uma segunda ampliação do meu espaço e também a criação de um 
                                estúdio de Pilates – aparelhos, solo e bola. 
                            </p>
                            <p className='text'>
                                O empreendimento passou a atender um maior fluxo de pessoas por horário, o Pilates começou a formar suas turmas e o espaço de reabilitação tornou-se <strong>referência</strong> para os sócios esportistas e frequentadores do clube. 
                            </p>
                            <p className='text'>
                                Em 2017, o Clube iniciou um processo de mudança, incluindo nosso ambiente de atendimento. Buscamos um novo local para a clínica e passamos a atender no Setor Sul em 2018, bem próximo ao Clube. Com o desejo e a visão de mais <strong>resultados</strong>, 
                                mais <strong>qualidade</strong> e menos modismo, temos hoje uma identidade própria. 
                            </p>
                            <p className='text'>
                                Nasce a marca <strong>ECMA</strong> - Espaço Clínico Raydel Marque, suma revelação em nossas vidas, onde oferecemos a Clássica Medicina Alternativa por meio de uma base sólida de fé Cristã. Hoje somos uma clínica de saúde que visa o equilíbrio entre o 
                                corpo, a mente e o espírito, aliado a qualidade de vida. 
                            </p>
                        </span>
                        <button id='clinic-button' onClick={showMore} className='button bn'>
                            Mostrar mais
                        </button>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} className='center flex-row flex-wrap container-bpa'>
                    <IconCard icon='eye' size='4em' title='Visão' text={vision} />
                    <IconCard icon='star' size='4em' title='Missão' text={mission} />
                    <IconCard icon='heart' size='4em' title='Valores' text={values} />
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default Clinic;