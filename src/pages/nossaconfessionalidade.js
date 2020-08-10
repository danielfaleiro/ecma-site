import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'

const Faith = loadable(() => import('../components/Faith/Faith'), {
  fallback: <Loading />
})

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
