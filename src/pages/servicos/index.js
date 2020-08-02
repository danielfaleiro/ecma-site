import React from 'react'
import ServicesPage from '../../components/ServicesPage/ServicesPage'
import Page from '../../components/Page/Page'
import SEO from '../../components/SEO/SEO'

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
