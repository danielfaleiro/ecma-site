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

const FisioPage = ({ data }) => {
  const fisioImg = data.service1.childImageSharp.fluid
  const texts = {
    about: <>
      <p className="hm-default">Área de atuação profissional e ciência que estuda, diagnostica, previne e restabelece as disfunções dos sistemas do <strong>corpo humano</strong>. Com objetivo de preservar, manter, desenvolver ou restaurar a integridade dos sistemas osteomusculares.</p>
      <p className="hm-default">O Fisioterapeuta é o profissional de saúde, devidamente registrado no Conselho de sua classe, com formação acadêmica superior, habilitado para construção do diagnóstico cinesiológico funcional e pode prescrever condutas fisioterapêuticas.</p>
    </>,
    howItWorks: <p className="hm-default">Agende uma Avaliação com nossos profissionais, na qual serão coletadas as informações de suas queixas, necessidades físicas e seus objetivos com o tratamento. Com base nessa anamnese (entrevista), o fisioterapeuta irá montar e te entregar o <strong>Plano de Acompanhamento</strong> com uma proposta a curto, médio e longo prazo, descrevendo o objetivo de cada etapa, observações gerais e específicas, orientações e os custos do Plano.</p>,
    indication: <p className="hm-default">Crianças acima de 7 anos, jovens, adultos, 3° idade e atletas profissionais ou amadores.</p>,
    disfunctions: <>
      <p className="hm-default">Em nosso Espaço atendemos casos de fraturas diversas, traumas, entorses, luxações, desordens e desequilíbrio do sistema osteomuscular, lesões por esforço repetitivo. Atuamos também em pós-operatórios como: artrodese, artroscopia, reconstrução dos ligamentos do joelho (LCA e LCP) e cirurgias reparadoras de tendões de ombro, joelhos e tornozelos.</p>
      <p className="hm-default">Desenvolvemos um trabalho especial para patologias e disfunções da coluna, com uma proposta de <strong>Integração Multiprofissional</strong> (Osteopatia, Fisioterapia, Pilates e Funcional), cujas áreas atuam nos aspectos emocionais e físicos. Fazemos um trabalho de Educação em Dor e conscientização somatoemocional.</p>
      <p className="hm-default">O fisioterapeuta atua no acompanhamento do atleta/paciente, avaliando de forma periódica suas funções e condicionamento físico, prescrevendo condutas de ações preventivas, de tratamento de lesões e traumas físicos das suas práticas.</p>
    </>,
    time: <p className="hm-default">A durabilidade do tratamento, a quantidade de sessões e os intervalos entre elas, dependerão do quadro sintomático, tempo de lesão e dos objetivos do paciente o que torna cada caso muito peculiar.</p>,
    schedule: <p className="hm-default">Segunda a Sexta, das 15h às 21h</p>,
    procedure: <ul className="hm-default">
      <li>Avaliação Cinético-Funcional (Planejamento personalizado do tratamento)</li>
      <li>Lesões Ortopédicas e Traumatológicas</li>
      <li>Desportistas</li>
      <li>Pré e Pós-Treino (suporte e acompanhamento)</li>
      <li>Prevenção de Lesões</li>
      <li>Disfunções da Coluna (Programa de Tratamento da Dor Crônica, Educação em Dor)</li>
      <li>Alongamento</li>
    </ul>,
    contact: <>
      <p className="hm-default"><strong>Raydel Marques</strong><br />
      Telefone: <a href='tel:062991050615'>(62) 9 99105-0615</a><br />
      E-mail: <a href='mailto:fisioterapia@espacoecma.com.br'>fisioterapia@espacoecma.com.br</a></p>
    </>
  }
  const others = {
    services: ['Osteopatia', 'Pilates Clássico', 'Personal Trainer', 'Espaço Relaxar'],
    images: ['/media/osteopatia225.jpg', '/media/pilates225.jpg', '/media/treinamento225.jpg', '/media/espacorelaxar225.jpg'],
    route: [links.services.osteo, links.services.pilates, links.services.training, links.services.relax]

  }
  return (
    <Page>
      <SEO
        title='Fisioterapia'
        description='Conheça nossa fisioterapia.'
        ogTitle="ECMA - Fisioterapia"
        ogDescription="Conheça a fisioterapia do ECMA"
        url="https://espacoecma.com.br/servicos/fisioterapia/"
      />
      <Service
        name='Fisioterapia'
        image={fisioImg}
        others={others}
        texts={texts}
        adjustContent={true}
      />
    </Page>

  )
}

export default FisioPage

export const pageQuery = graphql`
  query {
    service1: file(relativePath: { eq: "fisioterapia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
