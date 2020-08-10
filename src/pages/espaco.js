import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'

const Clinic = loadable(() => import('../components/Clinic/Clinic'), {
  fallback: <Loading />
})

const ClinicPage = () => (
  <Page>
    <SEO
      title="O Espaço"
      description='Conheça o nosso espaço.'
      ogTitle="ECMA - O Espaço"
      ogDescription="Saiba mais sobre o nosso Espaço."
      url="https://www.espacoecma.com.br/espaco/"
    />
    <Clinic />
  </Page>
)

export default ClinicPage
