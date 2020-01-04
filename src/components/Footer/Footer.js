import React from 'react';
import './Footer.css';
import logo from './footerlogo.png';
import links from '../../links';
import {IoSocialWhatsappOutline, IoIosTelephone, IoEmail, IoLocation, IoSocialFacebook, IoSocialInstagram} from 'react-icons/lib/io';

const Footer = () => {
    const iconSize = 40;

    return (
        <div className='footer center bg-ecma-blue pt4 pb4 white roboto'>
            <div className='min-max-width flex justify-between footer-inner'>
                <div className='center items-center flex-column footer-logo-container'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='center items-center flex-column footer-info'>
                    <a className='start items-center flex-row footer-link' href={links.whatsapp}>
                        <IoSocialWhatsappOutline className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            (62) 9 9105-0615
                        </p>
                    </a>
                    <div className='start flex-row items-center'>
                        <IoIosTelephone className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            <a className='footer-link' href='tel:06239261118'>(62) 3926-1118</a>
                            <span> / </span>
                            <a  className='footer-link' href='tel:062991050615'>(62) 9 9105-0615</a>
                        </p>
                    </div>
                    
                    <a className='start items-center flex-row footer-link' href='mailto:contato@espacoecma.com.br'>
                        <IoEmail className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            contato@espacoecma.com.br
                        </p>
                    </a>
                    <div className='start flex-row items-center footer-info-left'>
                        <IoLocation className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            Rua 85A - Qd. F-16, Lote 13 St. Sul<br/>
                            Goiânia - GO<br/>
                            CEP: 74080-020
                        </p>
                    </div>
                </div>
                <div className='center footer-social-media items-center'>
                    <a className='footer-link' href='https://www.facebook.com/espacoraydelmarques/'>
                        <IoSocialFacebook className='social-icon' size={iconSize*1.5}/>
                    </a>
                    <a className='footer-link' href='https://www.instagram.com/espacoecma/'>
                        <IoSocialInstagram className='social-icon' size={iconSize*1.5}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;