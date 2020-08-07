import React from 'react'
import { IoIosTelephone, IoIosEmail, IoIosLocation, IoSocialWhatsappOutline } from 'react-icons/lib/io/'
import ContactForm from './ContactForm'
import Map from './Map'
import links from '../../links'
import './ContactPage.css'
import WhatsappContact from './WhatsappContact'
import Title from '../PageElements/Title'

const ContactPage = () => {
  return (
    <main className='center top-page flex-column flex-nowrap lato'>
      <address className='roboto tc contact-container container-tpa fs-normal'>
        <Title>Contato</Title>
        <p className='section-subtitle hm-default'>Deseja marcar uma avaliação? Tem alguma dúvida? Pode contar conosco!</p>
        <div className='contact-info tl'>
          <IoSocialWhatsappOutline size='25'/>
          <div><strong>WhatsApp</strong></div>
          <span></span>
          <a href={links.whatsapp} className='grid-gap'>(62) 9 9105-0615</a>
          <IoIosTelephone size='25'/>
          <div><strong>Telefone</strong></div>
          <span></span>
          <div className='grid-gap'>
            <a href='tel:06239261118'>(62) 3926-1118</a>
            <span> / </span>
            <a href='tel:062991050615'>(62) 9 9105-0615</a>
          </div>
          <IoIosEmail size='25'/>
          <div><strong>E-mail</strong></div>
          <span></span>
          <a href='mailto:contato@espacoecma.com.br' className='grid-gap'>contato@espacoecma.com.br</a>
          <IoIosLocation size='25' />
          <div><strong>Endereço</strong></div>
          <span></span>
          <div className='grid-gap'>Rua 85A Qd. F-16, Lote 13 St. Sul<br />Goiânia - GO<br />CEP: 74080-020</div>
        </div>
      </address>
      <Map />
      <WhatsappContact />
      <div className='center flex-nowrap flex-column min-max-width'>
        <section className='hm-default section-container'>
          <Title>Deixe sua mensagem</Title>
          <ContactForm />
        </section>
      </div>
    </main>
  )
}

export default ContactPage
