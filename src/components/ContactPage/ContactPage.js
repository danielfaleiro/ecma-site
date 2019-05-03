import React from 'react';
import {IoIosTelephone, IoIosEmail, IoIosLocation} from 'react-icons/lib/io/';
import ContactForm from './ContactForm';
import Map from './Map';
import './ContactPage.css'


const ContactPage = () => {
    return (
        <div className='center top-page flex-column flex-nowrap lato'>
            <div className='roboto tc bg-moon-gray container-tpa'>
                <h1 className='color-ecma-gold'>Contato</h1>
                <p className='section-subtitle'>Deseja marcar uma avaliação? Tem alguma dúvida? Pode contar conosco!</p>
                <div className='contact-info tl'>
                    <IoIosTelephone id='icon1' size='25'/>
                    <div><strong>Telefone</strong></div>
                    <span></span>
                    <div className='grid-gap'>(62) 3926-1118 / (62) 9 9105-0615</div>
                    <IoIosEmail id='icon2' size='25'/>
                    <div><strong>E-mail</strong></div>
                    <span></span>
                    <div className='grid-gap'>contato@espacoecma.com.br</div>
                    <IoIosLocation id='icon3' size='25' />
                    <div><strong>Endereço</strong></div>
                    <span></span>
                    <div className='grid-gap'>Rua 85A Qd. F-16, Lote 13 St. Sul<br />Goiânia - GO<br />CEP: 74080-020</div>
                </div>
            </div>
            <Map />
            <div className='center flex-nowrap flex-column'>
                <div className='hma section-container'>
                    <h1 className='tc color-ecma-gold'>Deixe sua mensagem</h1>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;