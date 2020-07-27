import React from 'react'
import { FaWhatsapp } from 'react-icons/lib/fa'
import links from '../../links'
import './WhatsappButton.css'

const WhatsappButton = () => {
  return (
    <aside>
      <a href={links.whatsapp} className='whatsapp-button-container'>
        <FaWhatsapp className='whatsapp-button'/>
      </a>
    </aside>
  )
}

export default WhatsappButton
