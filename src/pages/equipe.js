import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'
import { graphql } from 'gatsby'

const Team = loadable(() => import('../components/Team/Team'), {
  fallback: <Loading />
})

const TeamPage = ({ data }) => {
  const images = [
    data.img1.childImageSharp.fluid,
    data.img2.childImageSharp.fluid,
    data.img3.childImageSharp.fluid
  ]
  return (
    <Page>
      <SEO
        title="Nossa Equipe"
        description='Conheça nossa equipe de profissionais.'
        ogTitle="ECMA - Nossa Equipe"
        ogDescription="Conheça a equipe de profissionais do ECMA."
        url="https://espacoecma.com.br/equipe/"
      />
      <Team images={images}/>
    </Page>
  )
}
export default TeamPage

export const pageQuery = graphql`
  query {
    img1: file(relativePath: { eq: "raydel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "luana.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "juliene.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
