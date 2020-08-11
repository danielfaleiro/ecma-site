import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'
import { graphql } from 'gatsby'

const Clinic = loadable(() => import('../components/Clinic/Clinic'), {
  fallback: <Loading />
})

const ClinicPage = ({ data }) => {
  const localeImages = [
    data.clinic1.childImageSharp.fluid,
    data.clinic2.childImageSharp.fluid,
    data.clinic3.childImageSharp.fluid
  ]
  const historyImages = [
    data.history1.childImageSharp.fluid,
    data.history2.childImageSharp.fluid,
    data.history3.childImageSharp.fluid,
    data.history4.childImageSharp.fluid,
    data.newEcma1.childImageSharp.fluid,
    data.newEcma2.childImageSharp.fluid
  ]
  return (
    <Page>
      <SEO
        title="O Espaço"
        description='Conheça o nosso espaço.'
        ogTitle="ECMA - O Espaço"
        ogDescription="Saiba mais sobre o nosso Espaço."
        url="https://www.espacoecma.com.br/espaco/"
      />
      <Clinic
        localeImages={localeImages}
        historyImages={historyImages}
      />
    </Page>
  )
}

export default ClinicPage

export const pageQuery = graphql`
  query {
    clinic1: file(relativePath: { eq: "clinica1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clinic2: file(relativePath: { eq: "clinica2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    clinic3: file(relativePath: { eq: "clinica3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    history1: file(relativePath: { eq: "historia-ecma-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    history2: file(relativePath: { eq: "historia-ecma-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    history3: file(relativePath: { eq: "historia-ecma-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    history4: file(relativePath: { eq: "historia-ecma-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newEcma1: file(relativePath: { eq: "nova-ecma-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newEcma2: file(relativePath: { eq: "nova-ecma-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
