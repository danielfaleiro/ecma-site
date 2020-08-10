import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'

const Home = loadable(() => import('../components/Home/Home'), {
  fallback: <Loading />
})

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
