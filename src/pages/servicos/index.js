import React from 'react'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../../components/Loading/Loading'

const ServicesPage = loadable(() => import('../../components/ServicesPage/ServicesPage'), {
  fallback: <Loading />
})

const ActualServicesPage = () => (
  <Page>
    <SEO
      title="Nossos Serviços"
      description='Conheça nossos serviços.'
      ogTitle="ECMA - Nossos Serviços"
      ogDescription="Conheça os serviços oferecidos pelo ECMA."
      url="https://espacoecma.com.br/servicos/"
    />
    <ServicesPage />
  </Page>
)

export default ActualServicesPage
