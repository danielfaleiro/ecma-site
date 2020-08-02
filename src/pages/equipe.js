import React from 'react'
import Team from '../components/Team/Team'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

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
