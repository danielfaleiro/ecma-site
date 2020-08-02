import React from 'react'
import Service from '../../components/Services/Service'
import fisioImg from '../../components/Services/fisioterapia.jpg'
import osteoImg from '../../components/Services/osteopatia.jpg'
import pilatesImg from '../../components/Services/pilates.jpg'
import treinoImg from '../../components/Services/treinamento.jpg'
import relaxarImg from '../../components/Services/espacorelaxar.jpg'
import links from '../../links'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'

const PilatesPage = () => {
  const texts = {
    about: <>
      <p className="hm-default">Um método de <strong>exercícios</strong> que faz o uso de molas e da gravidade do corpo que, em sua forma original, foi criado por Joseph Pilates, baseado nos princípios da respiração, concentração, centro, precisão, fluidez.</p>
      <p className="hm-default">Ao frequentar as sessões de Pilates, pode-se aprender o método do Pilates Clássico ou Pilates Contemporâneo. O Pilates Clássico foi criado no início do século XX e desde então ele cresce constantemente recebendo novas técnicas, posturas e até mesmo acessórios, dando origem ao Pilates Contemporâneo. </p>
      <p className="hm-default">O método clássico segue uma ordem específica de exercícios, apresentada pelo professor de acordo com o nível do aluno/paciente, incluindo a realização do aquecimento.</p>
    </>,
    howItWorks: <p className="hm-default">Você pode agendar uma <strong>sessão gratuita</strong> e experienciar nossos serviços. Após sua sessão, serão apresentados nossos pacotes e horários disponíveis. Se o seu intuito de fazer o Pilates for terapêutico, você será orientado a agendar uma avaliação com o fisioterapeuta para que seja traçado a melhor conduta de exercícios.</p>,
    indication: <p className="hm-default">O Pilates é indicado para todas as idades, pois respeita as individualidades das pessoas.</p>,
    disfunctions: undefined,
    time: <p className="hm-default">Não há um período estipulado para a realização do Pilates, podendo ser feito para objetivos específicos como tratamento de dores ou para qualidade de vida.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 7h às 11h e das 15h às 21h</p>,
    procedure: <ul className="hm-default">
      <li>Até 3 alunos por horário</li>
      <li>Pacote de sessões por mês</li>
      <li>Sessões de 60 minutos</li>
    </ul>,
    contact: <>
      <p className="hm-default"><strong>Juliene Gonçalves</strong><br />
      Telefone: <a href='tel:062981668650'>(62) 9 8166-8650</a><br />
      E-mail: <a href='mailto:pilates@espacoecma.com.br'>pilates@espacoecma.com.br</a></p>
    </>
  }
  const others = {
    services: ['Fisioterapia', 'Osteopatia', 'Personal Trainer', 'Espaço Relaxar'],
    images: [fisioImg, osteoImg, treinoImg, relaxarImg],
    route: [links.services.fisio, links.services.osteo, links.services.training, links.services.relax]
  }
  return (
    <Page>
      <SEO
        title='Pilates Clássico'
        description='Conheça nosso pilates.'
        ogTitle="ECMA - Pilates"
        ogDescription="Conheça o pilates do ECMA"
        url="https://espacoecma.com.br/servicos/pilates/"
      />
      <Service
        name='Pilates Clássico'
        image={pilatesImg}
        others={others}
        texts={texts}
        adjustContent={false}
      />
    </Page>
  )
}

export default PilatesPage
