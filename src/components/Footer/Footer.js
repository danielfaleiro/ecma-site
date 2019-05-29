import React from 'react';
import './Footer.css';
import logo from './footerlogo.png';
import {IoIosTelephone, IoEmail, IoLocation, IoSocialFacebook, IoSocialInstagram} from 'react-icons/lib/io';

const Footer = () => {
    const iconSize = 40;

    return (
        <div className='footer center bg-ecma-blue pt4 pb4 white roboto'>
            <div className='min-max-width hma flex justify-between footer-inner'>
                <div className='center items-center flex-column footer-logo-container'>
                    <img  className='footer-logo' src={logo} alt='Logo' />
                </div>
                <div className='center items-center flex-column footer-info'>
                    <div className='start flex-row items-center footer-info-left'>
                        <IoLocation className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            Rua 85A - Qd. F-16, Lote 13 St. Sul<br/>
                            Goiânia - GO<br/>
                            CEP: 74080-020
                        </p>
                    </div>
                    <div className='start flex-row items-center'>
                        <IoIosTelephone className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            <a className='footer-link' href='tel:06239261118'>(62) 3926-1118</a>
                            <span> / </span>
                            <a  className='footer-link' href='tel:062991050615'>(62) 9 9105-0615</a>
                        </p>
                    </div>
                    <a className='start items-center flex-row footer-link' href='mailto:raydelmm@gmail.com'>
                        <IoEmail className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>
                            raydelmm@gmail.com
                        </p>
                    </a>
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