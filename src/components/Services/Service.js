import React from 'react'
import './Service.css'
import { Link } from 'gatsby'
import onRouteChange from '../../events/onRouteChange'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import links from '../../links'

const TextBlock = ({ title, text, isContact }) => {
  const content =
    <>
      <h3 className="hm-default">{title}</h3>
      <span className='text'>{text}</span>
    </>

  if (isContact) {
    return (
      <div className='service-text'>
        <address className='fs-normal'>
          {content}
        </address>
      </div>
    )
  }
  return (
    <div className='service-text'>
      {content}
    </div>
  )
}

const Service = ({ name, image, texts, others, adjustContent }) => {
  const otherServices = () => {
    let width = 225
    const res = others.services.map(function (elem, index) {
      if (others.route[index] === links.services.training || others.route[index] === links.services.osteo) { width = 300 } else if (others.route[index] === links.services.pilates || others.route[index] === links.services.relax) { width = 338 } else if (others.route[index] === links.services.fisio) { width = 344 }

      return (
        <Link
          to={others.route[index]}
          key={index}
          onClick={onRouteChange}
          className='services-bt services-bt-others white b lato'
          style={{
            backgroundImage: `url(${others.images[index]})`,
            backgroundSize: `${width}px 225px`
          }}
        >
          <span className='services-bt-text'>
            {elem.toUpperCase()}
          </span>
        </Link>
      )
    })
    return res
  }

  return (
    <div className='top-page container-tpa page-min-height'>
      <main className='min-max-width center flex-column section-container lato'>
        <h1 className='hm-default color-ecma-gold tc'>{name}</h1>
        <div className='service-img-container flex'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} >
            <img src={`${image}`} alt={name} className='service-image'/>
          </ScrollAnimation>
          <div className='service-img-side service-text'>
            <h3 className="hm-default">O QUE É</h3>
            <span className='text'>{texts.about}</span>
          </div>
        </div>
        {texts.disfunctions && <TextBlock title="TIPOS DE DISFUNÇÕES" text={texts.disfunctions} />}
        {texts.areas && <TextBlock title="ÁREAS ABORDADAS" text={texts.areas} />}
        {adjustContent && <TextBlock title="COMO FUNCIONA" text={texts.howItWorks}/>}
        <div className='service-panel flex'>
          <div className='start flex-column service-main'>
            {!adjustContent && <TextBlock title="COMO FUNCIONA" text={texts.howItWorks}/>}
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
            {texts.schedule && <TextBlock title="HORÁRIO DE ATENDIMENTO" text={texts.schedule} />}
            {texts.contact && <TextBlock title="PROFISSIONAL RESPONSÁVEL" isContact text={texts.contact} />}
            {texts.budget && <TextBlock title="SOLICITE UM ORÇAMENTO" text={texts.budget} />}
          </div>
        </div>
      </main>
      <aside className='bg-ecma-gray other-services section-container'>
        <div className='min-max-width center flex-column items-center'>
          <div>
            <h1 className='tc lato color-ecma-gray'>Conheça Também</h1>
          </div>
          <ScrollAnimation animateIn='fadeInUp' animateOnce={true} className='center flex-row flex-wrap'>
            {otherServices()}
          </ScrollAnimation>
        </div>
      </aside>
    </div>
  )
}

export default Service
