import React from 'react'
import Faith from '../components/Faith/Faith'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

const FaithPage = () => (
  <Page>
    <SEO
      title="Nossa Confessionalidade"
      description='Atendemos com base na tríade corpo, mente e espírito.'
      ogTitle="ECMA - Nossa Confessionalidade"
      ogDescription="Conheça a confessionalidade do ECMA."
      url="https://espacoecma.com.br/nossaconfessionalidade/"
    />
    <Faith />
  </Page>
)

export default FaithPage
