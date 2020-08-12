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

const RelaxPage = ({ data }) => {
  const relaxarImg = data.service5.childImageSharp.fluid
  const texts = {
    about: <>
      <p className="hm-default">O excesso de compromissos das pessoas associados a uma vida com alto nível de estresse, fez com que muitas pessoas deixassem de cuidar da própria saúde e bem estar. A quick massagem é uma alternativa prática e rápida, que proporciona relaxamento muscular e redução das tensões globais, em uma técnica que dura em média 10 minutos.</p>
      <p className="hm-default">Nós montamos um ambiente com as cadeiras podendo ser de uma a seis unidades com decoração e climatização de todo o espaço. Para ambientes de trabalho, ao ar livre, em shoppings, salões de beleza, spa´s, clubes, clínicas e em diversos outros lugares, em função da sua praticidade e rapidez.</p>
    </>,
    howItWorks: <>
      <p className="hm-default">Solicite uma Proposta de Orçamento através dos nossos contatos. Montaremos seu orçamento através dos dados: número de público do evento, horário de cobertura início e fim e a quantidade de maca a ser disponibilizada.</p>
      <p className="hm-default">Uma opção para agregar valores e enriquecimento ao seu evento, contribuindo e proporcionado a boa relação das empresas, beneficiários e clientes. Uma ferreamente no despertar do interesse em cuidar da saúde e prevenir doenças ocupacionais e laborais.</p>
    </>,
    indication: <p className="hm-default">O espaço Relaxar é indicado para todas as idades.</p>,
    areas: <>
      <p className="hm-default">A cadeira acomoda o cliente em postura sentada apoiando o rosto, o peito, os joelhos e os braços. Assim este recebe as terapias nas regiões da coluna vertebral e nos braços. </p>
      <p className="hm-default">A técnicas é realizada por profissionais treinados e qualificados, indicada para diversos tipos de pessoas, promovendo melhoras da circulação sanguínea e aumenta a disposição do indivíduo, em função do seu efeito revigorante. Tendo como vantagem da técnica que o cliente não precisa trocar ou tirar a roupa e os sapatos, aumentando a sua praticidade.</p>
    </>,
    time: <p className="hm-default">A durabilidade do acompanhamento a quantidade de execução dependerá dos objetivos apresentados na Avaliação Física e do interesse do aluno. Não sendo estipulado por parte do profissional tempo de acompanhamento.</p>,
    procedure: <ul className="hm-default">
      <li>Relaxamento muscular;</li>
      <li>Diminuição da fadiga muscular;</li>
      <li>Remoção de toxinas do organismo;</li>
      <li>Aumento das trocas metabólicas e energéticas do organismo;</li>
      <li>Facilitação do deslizamento entre as fáscias e os músculos esqueléticos</li>
      <li>Melhora da textura da pele;</li>
      <li>Estímulo à produção de colágeno e elastina;</li>
      <li>Melhora do estado de possíveis aderências cutâneas;</li>
      <li>Efeito analgésico;</li>
      <li>Estímulo ao esvaziamento gástrico;</li>
      <li>Melhora do peristaltismo;</li>
      <li>Melhor ativação do sistema linfático;</li>
      <li>Melhora do bem estar respiratório e diminuição de obstruções brônquicas;</li>
      <li>Melhora da consciência corporal.</li>
    </ul>,
    budget: <p style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}className="hm-default">
      <span style={{ textAlign: 'right', paddingRight: '10px' }}>
        Telefone:
      </span>
      <>
        <a href='tel:06239261118'>(62) 3926-1118</a><br /><a href='tel:062991050615'>(62) 9 9105-0615</a>
      </>
      <span style={{ textAlign: 'right', paddingRight: '10px' }}>
        E-mail:
      </span>
      <>
        <a href='mailto:personal@espacoecma.com.br'>contato@espacoecma.com.br</a>
      </>
    </p>
  }
  const others = {
    services: ['Fisioterapia', 'Osteopatia', 'Pilates Clássico', 'Personal Trainer'],
    images: ['/media/fisioterapia225.jpg', '/media/osteopatia225.jpg', '/media/pilates225.jpg', '/media/treinamento225.jpg'],
    route: [links.services.fisio, links.services.osteo, links.services.pilates, links.services.training]
  }
  return (
    <Page>
      <SEO
        title='Espaço Relaxar'
        description='Conheça nosso Espaço Relaxar.'
        ogTitle="ECMA - Espaço Relaxar"
        ogDescription="Conheça o Espaço Relaxar do ECMA"
        url="https://espacoecma.com.br/servicos/espacorelaxar/"
      />
      <Service
        name='Espaço Relaxar'
        image={relaxarImg}
        others={others}
        texts={texts}
        adjustContent={false}
      />
    </Page>
  )
}

export default RelaxPage

export const pageQuery = graphql`
  query {
    service5: file(relativePath: { eq: "espacorelaxar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
