import React from 'react'
import { FaWhatsapp } from 'react-icons/lib/fa'
import './WhatsappContact.css'
import AnchorButton from '../AnchorButton/AnchorButton'
import links from '../../links'

const WhatsappContact = () => {
  return (
    <div className='whatsapp-contact-container'>
      <div className='center flex-wrap min-max-width'>
        <FaWhatsapp className='whatsapp-contact-icon'/>
        <div className='whatsapp-contact-content flex-column'>
          <div className='whatsapp-contact-subtitle'>
            Tire sua dúvida e marque seu horário pelo WhatsApp.
          </div>
          <AnchorButton
            to={links.whatsapp}
            text='Inicie sua conversa com o ECMA'
            className='whatsapp-contact-button'
            toOutside
          />
        </div>
      </div>
    </div>
  )
}

export default WhatsappContact
