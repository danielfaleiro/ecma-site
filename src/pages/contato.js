import React from 'react'
import ContactPage from '../components/ContactPage/ContactPage'
import ReactNotification from 'react-notifications-component'
import Page from '../components/Page/Page'
import SEO from '../components/SEO/SEO'

const ContactPage2 = () => (
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

export default ContactPage2
