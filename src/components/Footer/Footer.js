import React from 'react';
import './Footer.css';
import logo from './footerlogo.png';
import {IoIosTelephone, IoEmail, IoLocation, IoSocialFacebook, IoSocialInstagram} from 'react-icons/lib/io';

const Footer = () => {
    const iconSize = 40;

    const goToFacebook = () => {

    };

    return (
        <div className='bg-ecma-blue pt4 pb4'>
            <div className='max-width center flex-row flex-wrap-reverse'>
                <img  className='footer-logo ml5' src={logo} alt='Logo' />
                <div className='white roboto center flex-column footer-wrapper'>
                    <div className='start flex-row items-center'>
                        <IoLocation className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>Rua 85A - Qd. F-16, Lote 13 St. Sul<br/>Goiânia - GO<br/>CEP: 74080-020</p>
                    </div>
                </div>
                <div className='white roboto center flex-column footer-wrapper'>
                    <div className='start flex-row items-center'>
                        <IoIosTelephone className='footer-icon' size={iconSize}/>
                        <p className='footer-text'>(62) 9 9105-0615</p>
                    </div>
                    <a className='start items-center flex-row footer-link no-underline' href='mailto:raydelmm@gmail.com'>
                        <IoEmail className='footer-icon self-start' size={iconSize}/>
                        <p className='footer-text'>
                            raydelmm@gmail.com
                        </p>
                    </a>
                </div>
                <div className='white center flex-column-l flex-row-m flex-row-ns items-center footer-wrapper'>
                    <a className='footer-link' href='https://www.facebook.com/espacoraydelmarques/'>
                        <IoSocialFacebook onClick={goToFacebook} size={iconSize*1.25}/>
                    </a>
                    <a className='footer-link' href='https://www.instagram.com/espacoecma/'>
                        <IoSocialInstagram size={iconSize*1.25}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;