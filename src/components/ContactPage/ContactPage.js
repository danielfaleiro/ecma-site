import React from 'react';
import {IoIosTelephone, IoIosEmail, IoIosLocation} from 'react-icons/lib/io/';
import ContactForm from './ContactForm';
import Map from './Map';
import './ContactPage.css'


const ContactPage = () => {
    return (
        <div className='center flex-column flex-nowrap'>
            <div className='tc bg-moon-gray section-container'>
                <p className='title lato color-ecma-gold'>Contato</p>
                <p className='contact-subtitle lato'>Deseja marcar uma avaliação? Tem alguma dúvida? Pode contar conosco!</p>
                <div className='contact-info tl'>
                    <IoIosTelephone id='icon1' size='30'/><div id='text1'>Telefone: (62) 99105-0615</div>
                    <IoIosEmail id='icon2' size='30'/><div id='text2'>E-mail: contato@espacoecma.com.br</div>
                    <IoIosLocation id='icon3' size='30' /><div id='text3'>Endereço: Rua 85A Qd. F-16, Lote 13 St. Sul<br />Goiânia - GO<br />CEP: 74080-020</div>
                </div>
            </div>
            <Map />
            <div className='hma center flex-nowrap flex-column section-container'>  
                <p className='lato tc title color-ecma-gold'>Deixe sua mensagem</p>
                <ContactForm />
            </div>
        </div>
    );
}

export default ContactPage;