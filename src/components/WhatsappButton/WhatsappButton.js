import React from 'react'
import { FaWhatsapp } from 'react-icons/lib/fa'
import links from '../../links'
import './WhatsappButton.css'

const WhatsappButton = () => {
  return (
    <a href={links.whatsapp} className='whatsapp-button-container'>
      <FaWhatsapp className='whatsapp-button'/>
    </a>
  )
}

export default WhatsappButton
