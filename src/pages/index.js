import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'
import { graphql } from 'gatsby'

const Home = loadable(() => import('../components/Home/Home'), {
  fallback: <Loading />
})

const HomePage = ({ data }) => {
  const images = [
    data.carrossel1.childImageSharp.fluid,
    data.carrossel2.childImageSharp.fluid,
    data.carrossel3.childImageSharp.fluid,
    data.carrossel4.childImageSharp.fluid
  ]
  return (
    <Page>
      <SEO
        title="Espaço Clínico Raydel Marques"
        description="Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer em um único lugar. Conheça também nosso Espaço Relaxar."
        ogTitle="Espaço Clínico Raydel Marques"
        ogDescription="Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer."
        url="https://www.espacoecma.com.br/"
      />
      <Home images={images} />
    </Page>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    carrossel1: file(relativePath: { eq: "CarrosselClinica.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100, 
          duotone: {
            highlight: "#192835",
            shadow: "#192835",
            opacity: 61 
          }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carrossel2: file(relativePath: { eq: "CarrosselPersonal.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100, 
          duotone: {
            highlight: "#192835",
            shadow: "#192835",
            opacity: 61 
          }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carrossel3: file(relativePath: { eq: "CarrosselPilates.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100, 
          duotone: {
            highlight: "#192835",
            shadow: "#192835",
            opacity: 61 
          }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carrossel4: file(relativePath: { eq: "CarrosselEspacoRelaxar.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100, 
          duotone: {
            highlight: "#192835",
            shadow: "#192835",
            opacity: 61 
          }
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
