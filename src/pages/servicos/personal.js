import React from 'react'
import fisioImg from '../../components/Services/fisioterapia.jpg'
import osteoImg from '../../components/Services/osteopatia.jpg'
import pilatesImg from '../../components/Services/pilates.jpg'
import relaxarImg from '../../components/Services/espacorelaxar.jpg'
import links from '../../links'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../../components/Loading/Loading'
import { graphql } from 'gatsby'

const Service = loadable(() => import('../../components/Services/Service'), {
  fallback: <Loading />
})

const PersonalPage = ({ data }) => {
  const treinoImg = data.service4.childImageSharp.fluid
  const texts = {
    about: <>
      <p className="hm-default">Área de atuação do Profissional de Educação Física capacitado para elaborar, ministrar e supervisionar os treinamentos físicos, buscando seguir os objetivos de quem o contrata, respeitando os princípios básicos de treinamento.</p>
      <p className="hm-default">O Treinador Pessoal precisa ser formado em Educação Física e estar registrado no CREF. Onde pode seguir diversas áreas, esportes coletivos, reabilitação musculoesquelética e cardíaca entre outras.</p>
    </>,
    howItWorks: <>
      <p className="hm-default">Agende uma visita com nossos profissionais, na qual será apresentado nosso espaço, formas de trabalhos, agenda disponíveis e tabela de valores. Assim já iniciamos a fase de avaliação objetivas para que possa ser agendado aula experimental e <strong>Avaliação Física</strong> que engloba: Anamnese, Avaliação da Composição Corporal: Perimetria, Dobra Cutânea e Diâmetro Ósseo. Todos dados necessários para serem comparados os resultados e ter informações como circunferência do corpo e somatotipo físico.</p>
      <p className="hm-default">Assim o Personal irá elaborar seu treino e agendar o início do acompanhamento.</p>
    </>,
    indication: <p className="hm-default">O Treinamento com Personal Trainer é indicado para crianças a partir de 7 anos, jovens, adultos e 3° idade, buscando sempre respeitar a individualidade das pessoas.</p>,
    areas: <>
      <p className="hm-default">Fortalecimento muscular, melhora de performance, aptidão física, ganho de resistência e capacidade funcional, preparação para Testes de Aptidão Física, perca de peso, ganho de massa muscular, melhora da resposta cardiopulmonar, treinamento de atletas amador e esportistas, acompanhamento de grupo especiais: hipertensos, diabéticos, obesos e gestantes.</p>
      <p className="hm-default">Desenvolvemos uma abordagem personalizada com pacientes em fase final do tratamento com treinamento direcionado para a total recuperação física e retorno ao esporte. Fazemos uma proposta de Integração Multiprofissional (Fisioterapia, Pilates e Funcional) onde o objetivo é conquistar resultados de forma eficaz e com segurança para os clientes.</p>
      <p className="hm-default">O Personal atua acompanhando o aluno/paciente, avaliando e identificando suas necessidades físicas e objetivos. Assim elabora seu plano de treinamento onde a execução é toda supervisionada e acompanhada por um profissional. A execução do treinamento é feita em nossa unidade Espaço Personal ECMA, sem custos adicionais.</p>
    </>,
    time: <p className="hm-default">A durabilidade do acompanhamento a quantidade de execução dependerá dos objetivos apresentados na Avaliação Física e do interesse do aluno. Não sendo estipulado por parte do profissional tempo de acompanhamento.</p>,
    schedule: <p className="hm-default">das 7h15min às 19h de acordo com a disponibilidade de horário.</p>,
    procedure: <ul className="hm-default">
      <li>Musculação direcionada;</li>
      <li>Pilates aparelho solo e bola;</li>
      <li>Pilates e Treinamento funcional combinado;</li>
      <li>Alongamento;</li>
      <li>Fitness;</li>
      <li>Treinamento Físico;</li>
      <li>Perda de peso;</li>
      <li>Ganho de massa muscular;</li>
      <li>Preparação Física;</li>
      <li>Melhora das Respostas Cardiorrespiratórias e pulmonares.</li>
    </ul>,
    contact: <p className="hm-default"><strong>Luana Faleiro Santos</strong><br />
    Telefone: <a href='tel:062991050615'>(62) 9 9105-0615</a><br />
    E-mail: <a href='mailto:personal@espacoecma.com.br'>personal@espacoecma.com.br</a></p>
  }
  const others = {
    services: ['Fisioterapia', 'Osteopatia', 'Pilates Clássico', 'Espaço Relaxar'],
    images: [fisioImg, osteoImg, pilatesImg, relaxarImg],
    route: [links.services.fisio, links.services.osteo, links.services.pilates, links.services.relax]
  }
  return (
    <Page>
      <SEO
        title='Personal Trainer'
        description='Conheça nosso serviço de personal trainer.'
        ogTitle="ECMA - Personal Trainer"
        ogDescription="Conheça o serviço de personal trainer do ECMA"
        url="https://espacoecma.com.br/servicos/personal/"
      />
      <Service
        name='Personal Trainer'
        image={treinoImg}
        others={others}
        texts={texts}
        adjustContent={false}
      />
    </Page>
  )
}

export default PersonalPage

export const pageQuery = graphql`
  query {
    service4: file(relativePath: { eq: "treinamento.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
