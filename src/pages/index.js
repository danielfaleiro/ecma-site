import React from 'react'
import Home from '../components/Home/Home'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

const HomePage = () => (
  <Page>
    <SEO
      title="Espaço Clínico Raydel Marques"
      description="Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer em um único lugar. Conheça também nosso Espaço Relaxar."
      ogTitle="Espaço Clínico Raydel Marques"
      ogDescription="Fisioterapia, Osteopatia, Pilates Clássico e Personal Trainer."
      url="https://www.espacoecma.com.br/"
    />
    <Home />
  </Page>
)

export default HomePage
