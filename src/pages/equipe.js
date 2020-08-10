import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'

const Team = loadable(() => import('../components/Team/Team'), {
  fallback: <Loading />
})

const TeamPage = () => (
  <Page>
    <SEO
      title="Nossa Equipe"
      description='Conheça nossa equipe de profissionais.'
      ogTitle="ECMA - Nossa Equipe"
      ogDescription="Conheça a equipe de profissionais do ECMA."
      url="https://espacoecma.com.br/equipe/"
    />
    <Team />
  </Page>
)

export default TeamPage
