import React from 'react'
import Clinic from '../components/Clinic/Clinic'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

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
