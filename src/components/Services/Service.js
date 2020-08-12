import React from 'react'
import './Service.css'
import { Link } from 'gatsby'
import onRouteChange from '../../events/onRouteChange'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Title from '../PageElements/Title'
import Image from 'gatsby-image'

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
    const res = others.services.map((elem, index) => (
      <Link
        to={others.route[index]}
        key={index}
        onClick={onRouteChange}
        className='services-bt services-bt-others white b lato'
        style={{
          backgroundImage: `url(${others.images[index]})`
        }}
      >
        <span className='services-bt-text'>
          {elem.toUpperCase()}
        </span>
      </Link>
    ))
    return res
  }

  return (
    <div className='top-page container-tpa'>
      <main className='min-max-width center flex-column section-container lato'>
        <Title>{name}</Title>
        <div className='flex service-img-container'>
          <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} className='service-image' >
            <Image fluid={image} alt={name} />
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
            <Title gray>Conheça Também</Title>
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
