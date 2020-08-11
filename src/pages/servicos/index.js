import React from 'react'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../../components/Loading/Loading'
import { graphql } from 'gatsby'

const ServicesPage = loadable(() => import('../../components/ServicesPage/ServicesPage'), {
  fallback: <Loading />
})

const ActualServicesPage = ({ data }) => {
  const images = [
    data.service1.childImageSharp.fluid,
    data.service2.childImageSharp.fluid,
    data.service3.childImageSharp.fluid,
    data.service4.childImageSharp.fluid,
    data.service5.childImageSharp.fluid
  ]
  return (
    <Page>
      <SEO
        title="Nossos Serviços"
        description='Conheça nossos serviços.'
        ogTitle="ECMA - Nossos Serviços"
        ogDescription="Conheça os serviços oferecidos pelo ECMA."
        url="https://espacoecma.com.br/servicos/"
      />
      <ServicesPage images={images} />
    </Page>
  )
}

export default ActualServicesPage

export const pageQuery = graphql`
  query {
    service1: file(relativePath: { eq: "fisioterapia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service2: file(relativePath: { eq: "osteopatia.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service3: file(relativePath: { eq: "pilates.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service4: file(relativePath: { eq: "treinamento.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    service5: file(relativePath: { eq: "espacorelaxar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
