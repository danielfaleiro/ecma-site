import React from 'react'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'
import loadable from '@loadable/component'
import Loading from '../components/Loading/Loading'

const ReactNotification = loadable(() => import('react-notifications-component'))
const ContactPage = loadable(() => import('../components/ContactPage/ContactPage'), {
  fallback: <Loading />
})

const FinalContactPage = () => (
  <Page>
    <SEO
      title="Contato"
      description='Veja nossos contatos. Fale conosco por telefone, e-mail ou whatsapp.'
      ogTitle="ECMA - Contato"
      ogDescription="Tire suas dúvidas e marque seu atendimento por telefone, e-mail ou whatsapp."
      url="https://espacoecma.com.br/contato/"
    />
    <ReactNotification />
    <ContactPage />
  </Page>
)

export default FinalContactPage
