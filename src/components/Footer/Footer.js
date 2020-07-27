import React from 'react'
import './Footer.css'
import logo from './footerlogo.png'
import links from '../../links'
import { IoSocialWhatsappOutline, IoIosTelephone, IoEmail, IoLocation, IoSocialFacebook, IoSocialInstagram } from 'react-icons/lib/io'

const Footer = () => {
  const iconSize = 40
  return (
    <div className='footer center bg-ecma-blue pt4 pb4 white roboto footer-text'>
      <footer className='min-max-width hm-default flex justify-between footer-inner'>
        <div className='center items-center flex-column footer-logo-container'>
          <img src={logo} alt='Logo do ECMA'/>
        </div>
        <div className='center items-center flex-column footer-info'>
          <address className='contact-info ma2 t fs-normal'>
            <IoSocialWhatsappOutline size='25'/>
            <div><strong>WhatsApp</strong></div>
            <span></span>
            <a href={links.whatsapp} className='grid-gap footer-link'>(62) 9 9105-0615</a>
            <IoIosTelephone size='25'/>
            <div><strong>Telefone</strong></div>
            <span></span>
            <div className='grid-gap'>
              <a href='tel:06239261118' className='footer-link'>(62) 3926-1118</a>
              <span> / </span>
              <a href='tel:062991050615' className='footer-link'>(62) 9 9105-0615</a>
            </div>
            <IoEmail size='25'/>
            <div><strong>E-mail</strong></div>
            <span></span>
            <a href='mailto:contato@espacoecma.com.br' className='grid-gap footer-link'>contato@espacoecma.com.br</a>
            <IoLocation size='25' />
            <div><strong>Endereço</strong></div>
            <span></span>
            <div className='grid-gap'>Rua 85A Qd. F-16, Lote 13 St. Sul<br />Goiânia - GO<br />CEP: 74080-020</div>
          </address>
        </div>
        <div className='center footer-social-media items-center'>
          <a className='footer-link' href='https://www.facebook.com/espacoraydelmarques/'>
            <IoSocialFacebook className='social-icon' size={iconSize * 1.5}/>
          </a>
          <a className='footer-link' href='https://www.instagram.com/espacoecma/'>
            <IoSocialInstagram className='social-icon' size={iconSize * 1.5}/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
