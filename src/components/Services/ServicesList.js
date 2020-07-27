import React from 'react'
import './ServicesList.css'
import links from '../../links'
import { Link } from 'react-router-dom'
import onRouteChange from '../../events/onRouteChange'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

const ServicesList = () => {
  return (
    <div className='section-container section-vpa services-container'>
      <section className='min-max-width center flex-column tc'>
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
          <h1 className='hm-default services-title lato'>
            Nossos Serviços
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} className='hm-default center flex-row flex-wrap'>
          <Link id='fisioterapia-bt' to={links.services.fisio} onClick={onRouteChange} className='hm-default services-bt services-bt-main white lato b'>
            <span className='services-bt-text'>FISIOTERAPIA</span>
          </Link>
          <Link id='osteopatia-bt' to={links.services.osteo} onClick={onRouteChange} className='hm-default services-bt services-bt-main white lato b'>
            <span className='services-bt-text'>OSTEOPATIA</span>
          </Link>
          <Link id='pilates-bt' to={links.services.pilates} onClick={onRouteChange} className='hm-default services-bt services-bt-main white lato b'>
            <span className='services-bt-text'>PILATES CLÁSSICO</span>
          </Link>
          <Link id='personal-bt' to={links.services.training} onClick={onRouteChange} className='hm-default services-bt services-bt-main white lato b'>
            <span className='services-bt-text'>PERSONAL TRAINER</span>
          </Link>
          <Link id='relaxar-bt' to={links.services.relax} onClick={onRouteChange} className='hm-default services-bt services-bt-main white lato b'>
            <span className='services-bt-text'>ESPAÇO RELAXAR</span>
          </Link>
        </ScrollAnimation>
      </section>
    </div>
  )
}

export default ServicesList
