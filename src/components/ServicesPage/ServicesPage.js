import React from 'react'
import ServiceCard from './ServiceCard'
import links from '../../links'
import Title from '../PageElements/Title'

const ServicesPage = ({ images }) => {
  return (
    <main className='min-max-width top-page container-tpa center flex-nowrap flex-column lato'>
      <Title>Nossos Serviços</Title>
      <div className='center flex-row flex-wrap'>
        <ServiceCard
          img={images[0]}
          title='FISIOTERAPIA'
          route={links.services.fisio}
          text='Área de atuação profissional e ciência que estuda, diagnostica, previne e restabelece as disfunções dos sistemas do corpo humano.'
          flip={false}
        />
        <ServiceCard
          img={images[1]}
          title='OSTEOPATIA'
          route={links.services.osteo}
          text='É uma filosofia autônoma de cuidados de saúde primária, que usa métodos manuais para avaliar, diagnosticar e tratar disfunções dos sistemas corporais. Uma área de atuação profissional exclusiva para Fisioterapeutas.'
          flip={true}
        />
        <ServiceCard
          img={images[2]}
          title='PILATES CLÁSSICO'
          route={links.services.pilates}
          text='Método de exercícios que faz o uso de molas e da gravidade do corpo que, em sua forma original, foi criado por Joseph Pilates, baseado nos princípios da respiração, concentração, centro, precisão, fluidez.'
          flip={false}
        />
        <ServiceCard
          img={images[3]}
          title='PERSONAL TRAINER'
          route={links.services.training}
          text='Área de atuação do Profissional de Educação Física capacitado para elaborar, ministrar e supervisionar os treinamentos físicos, buscando seguir os objetivos de quem o contrata, respeitando os princípios básicos de treinamento.'
          flip={true}
        />
        <ServiceCard
          img={images[4]}
          title='ESPAÇO RELAXAR'
          route={links.services.relax}
          text='Prestação de serviço e ações em saudade e bem-estar em eventos diversos, proporcionando aos participantes um momento de relaxamento e um MIX de experiências.'
          flip={true}
        />
      </div>
    </main>
  )
}

export default ServicesPage
