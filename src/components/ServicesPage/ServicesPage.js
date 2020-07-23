import React from 'react'
import FisioImg from '../Services/fisioterapia.jpg'
import OsteoImg from '../Services/osteopatia.jpg'
import PilatesImg from '../Services/pilates.jpg'
import TreinoImg from '../Services/treinamento.jpg'
import RelaxImg from '../Services/espacorelaxar.jpg'
import ServiceCard from './ServiceCard'
import links from '../../links'

const ServicesPage = () => {
  return (
    <div className='min-max-width top-page container-tpa center flex-nowrap flex-column lato page-min-height'>
      <h1 className='center tc color-ecma-gold hm-default'>Nossos Serviços</h1>
      <div className='center flex-row flex-wrap'>
        <ServiceCard
          img={FisioImg}
          title='FISIOTERAPIA'
          route={links.services.fisio}
          text='Área de atuação profissional e ciência que estuda, diagnostica, previne e restabelece as disfunções dos sistemas do corpo humano.'
          flip={false}
        />
        <ServiceCard
          img={OsteoImg}
          title='OSTEOPATIA'
          route={links.services.osteo}
          text='É uma filosofia autônoma de cuidados de saúde primária, que usa métodos manuais para avaliar, diagnosticar e tratar disfunções dos sistemas corporais. Uma área de atuação profissional exclusiva para Fisioterapeutas.'
          flip={true}
        />
        <ServiceCard
          img={PilatesImg}
          title='PILATES CLÁSSICO'
          route={links.services.pilates}
          text='Método de exercícios que faz o uso de molas e da gravidade do corpo que, em sua forma original, foi criado por Joseph Pilates, baseado nos princípios da respiração, concentração, centro, precisão, fluidez.'
          flip={false}
        />
        <ServiceCard
          img={TreinoImg}
          title='PERSONAL TRAINER'
          route={links.services.training}
          text='Área de atuação do Profissional de Educação Física capacitado para elaborar, ministrar e supervisionar os treinamentos físicos, buscando seguir os objetivos de quem o contrata, respeitando os princípios básicos de treinamento.'
          flip={true}
        />
        <ServiceCard
          img={RelaxImg}
          title='ESPAÇO RELAXAR'
          route={links.services.relax}
          text='Prestação de serviço e ações em saudade e bem-estar em eventos diversos, proporcionando aos participantes um momento de relaxamento e um MIX de experiências.'
          flip={true}
        />
      </div>
    </div>
  )
}

export default ServicesPage
