import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import onRouteChange from '../../events/onRouteChange';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const HowItWorks = ({text}) => {
    return (
        <div className='service-text'>
            <h3 className="hm-default">COMO FUNCIONA</h3>
            <span className='text'>{text}</span>
        </div>
    );
}

const Service = ({name, image, texts, others, adjustContent}) => {
    const otherServices = () => {
        const res = others.services.map( function(elem, index) {
            return (
                <Link
                    to={others.route[index]}
                    key={index}
                    onClick={onRouteChange}
                    className='services-bt white b lato'
                    style={{
                        backgroundImage: `url(${others.images[index]})`,
                        backgroundSize: '250px 250px'
                    }}
                >
                    <span className='services-bt-text'>
                        {elem.toUpperCase()}
                    </span> 
                </Link>
            );
        });
        return res;
    };

    const disfunctionTitle = name === 'Personal Trainer' ? 'ÁREAS ABORDADAS' : 'TIPOS DE DISFUNÇÕES';
    
    return (
        <div className='top-page container-tpa page-min-height'>
            <div className='min-max-width center flex-column section-container lato'>
                <h1 className='hm-default color-ecma-gold tc'>{name}</h1>
                <div className='service-img-container flex'>
                    <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} >
                        <img src={`${image}`} alt='Fisioterapia' className='service-image' height='400px' width='auto'/>
                    </ScrollAnimation>
                    <div className='service-img-side service-text'>
                        <h3 className="hm-default">O QUE É</h3>
                        <span className='text'>{texts.about}</span>
                    </div>     
                </div>
                
                {texts.disfunctions === undefined ? <></> :
                    <div className='service-text'>
                        <h3 className="hm-default">{disfunctionTitle}</h3>
                        <span className='text'>{texts.disfunctions}</span>
                    </div>
                }
                {adjustContent? <HowItWorks text={texts.howItWorks}/> : <></>}
                <div className='service-panel flex'>
                    <div className='start flex-column service-main'>
                        {adjustContent? <></> : <HowItWorks text={texts.howItWorks}/>}
                        <div className='service-text'>
                            <h3 className="hm-default">TEMPO DE ACOMPANHAMENTO</h3>
                            <span className='text'>{texts.time}</span>
                        </div>
                        <div className='service-text'>
                            <h3 className="hm-default">NOSSO ESPAÇO ATUA COM</h3>
                            <span className='text'>{texts.procedure}</span>
                        </div>  
                    </div>
                    <div className='hm-default service-side'>
                        <div className='service-text'>
                            <h3 className="hm-default">PARA QUEM É INDICADO</h3>
                            <span className='text'>{texts.indication}</span>
                        </div> 
                        <div className='service-text'>
                            <h3 className="hm-default">HORÁRIO DE ATENDIMENTO</h3>
                            <span className='text'>{texts.schedule}</span>
                        </div>
                        <div className='service-text'>
                            <h3 className="hm-default">PROFISSIONAL RESPONSÁVEL</h3>
                            <span className='text'>{texts.contact}</span>
                        </div>
                    </div>
                </div>
            </div>   
            <div className='bg-ecma-gray other-services section-container'>
                <div className='min-max-width center flex-column items-center'>
                    <div>
                        <h1 className='tc lato color-ecma-gray'>Conheça Também</h1>
                    </div>
                    <ScrollAnimation animateIn='fadeInUp' animateOnce={true} className='center flex-row flex-wrap'>
                        {otherServices()}
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}


export default Service;