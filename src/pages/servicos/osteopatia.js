import React from 'react'
import links from '../../links'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../../components/Loading/Loading'
import { graphql } from 'gatsby'

const Service = loadable(() => import('../../components/Services/Service'), {
  fallback: <Loading />
})

const OsteoPage = ({ data }) => {
  const osteoImg = data.service2.childImageSharp.fluid
  const texts = {
    about: <>
      <p className="hm-default">É uma <strong>filosofia autônoma</strong> de cuidados de saúde primária, que usa métodos manuais para avaliar, diagnosticar e tratar disfunções dos sistemas corporais, agindo por meio da intervenção nos tecidos (articulações, músculos, fáscias, ligamentos, cápsulas, vísceras, tecidos nervoso, vasculares e linfáticos).</p>
      <p className="hm-default">A osteopatia é uma área da saúde, cujo profissional habilitado e especializado para exercê-la é o fisioterapeuta. É fundamentada em um conhecimento profundo da anatomia e fisiologia do corpo humano, buscando por meio de suas técnicas, o <strong>reequilíbrio</strong> de suas funções. O foco do tratamento é descobrir a origem da disfunção e não na localização dela.</p>
    </>,
    howItWorks: <p className="hm-default">Ao agendar uma sessão, o fisioterapeuta irá levantar as queixas do paciente e registrar seu histórico físico. Essa avaliação será a base de <strong>interpretação</strong> e início das avaliações específicas da osteopatia, para identificar a possível causa da disfunção. Em seguida, serão utilizadas técnicas manuais na busca de respostas fisiológicas imediatas, por meio de uma reavaliação em uma sessão.</p>,
    indication: <p className="hm-default">Crianças acima de 7 anos, jovens, adultos, 3° idade e atletas profissionais ou amadores.</p>,
    disfunctions: <p className="hm-default">As técnicas têm uma ampla indicação, podendo ser usadas para dores diversas, como: cefaleias, cervicalgias, dorsalgias, lombalgias, ciatalgias, musculares, tendíneas, ligamentares musculares.</p>,
    time: <p className="hm-default">A durabilidade do tratamento, a quantidade de sessões e os intervalos entre elas, dependerão da resposta sintomática de cada paciente, pois essa indicação é específica para cada caso, com o intuito de observar a resposta do corpo de acordo com os estímulos gerados.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 15h às 21h</p>,
    procedure: <p className="hm-default">A integração das áreas, com foco no melhor resultado para o paciente. </p>,
    contact: <>
      <p className="hm-default"><strong>Raydel Marques</strong><br />
      Telefone: <a href='tel:062991050615'>(62) 9 99105-0615</a><br />
      E-mail: <a href='mailto:fisioterapia@espacoecma.com.br'>fisioterapia@espacoecma.com.br</a></p>
    </>
  }
  const others = {
    services: ['Fisioterapia', 'Pilates Clássico', 'Personal Trainer', 'Espaço Relaxar'],
    images: ['/media/fisioterapia225.jpg', '/media/pilates225.jpg', '/media/treinamento225.jpg', '/media/espacorelaxar225.jpg'],
    route: [links.services.fisio, links.services.pilates, links.services.training, links.services.relax]
  }
  return (
    <Page>
      <SEO
        title='Osteopatia'
        description='Conheça nossa osteopatia.'
        ogTitle="ECMA - Osteopatia"
        ogDescription="Conheça a osteopatia do ECMA"
        url="https://espacoecma.com.br/servicos/osteopatia/"
      />
      <Service
        name='Osteopatia'
        image={osteoImg}
        others={others}
        texts={texts}
        adjustContent={false}
      />
    </Page>

  )
}

export default OsteoPage

export const pageQuery = graphql`
  query {
    service2: file(relativePath: { eq: "osteopatia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
