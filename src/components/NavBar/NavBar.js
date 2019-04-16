import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';


const NavBar = ({onRouteChange}) => {
    const menu = {
      home: "Home",
      clinica: "Clínica",
      confessionalidade: "Nossa Confessionalidade",
      equipe: "Equipe",
      servicos: {
        self: "Serviços",
        fisioterapia: "Fisioterapia",
        osteopatia: "Osteopatia",
        pilates: "Pilates",
        treinamento: "Treinamento",
      },
      contato: "Contato",
    }

    const showMobileMenu = () => {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu.className.includes(" show-mobile-menu"))
        mobileMenu.className = mobileMenu.className.replace(" show-mobile-menu", "");
      else
        mobileMenu.className += " show-mobile-menu";
    }

    return (
    <>
    <nav className='navigation'>
      <div className='logoContainer'>
        <a href='/' onClick={() => onRouteChange('/')}>
          <img  className='headerLogo' src={logo} alt='Logo' />
        </a>
      </div>
      <div className='menuItems'>
        <span>
          <p onClick={() => onRouteChange('/')} id='active' className='lato'>{menu.home}</p>
        </span>
        <span>
          <p className='lato'>{menu.clinica}</p>
        </span>
        <span>
          <p className='lato'>{menu.confessionalidade}</p>
        </span>
        <span>
          <p className='lato'>{menu.equipe}</p>
        </span>
        <span className='dropdown'>
        <p onClick={() => onRouteChange('services')} className='lato flex'>
            {menu.servicos.self}
            <MdArrowDropDown className='self-center' size='25' />
        </p>
        <div className='dropdown-content color-ecma-blue lato'>
          <a href='/'>{menu.servicos.fisioterapia}</a>
          <a href='/'>{menu.servicos.osteopatia}</a>
          <a href='/'>{menu.servicos.pilates}</a>
          <a href='/'>{menu.servicos.treinamento}</a>
        </div>
        </span>
        <span>
          <p onClick={() => onRouteChange('contact')} className='lato'>{menu.contato}</p>
        </span>
        <MdMenu onClick={showMobileMenu} className='menu-icon pointer' size='30' />
      </div>  
    </nav>
    <nav>
      <div id='mobileMenu' className='menu-mobile hma'>
          <span>
            <p onClick={() => onRouteChange('/')} id='active' className='lato'>{menu.home}</p>
          </span>
          <span>
            <p className='lato'>{menu.clinica}</p>
          </span>
          <span>
            <p className='lato'>{menu.confessionalidade}</p>
          </span>
          <span>
            <p className='lato'>{menu.equipe}</p>
          </span>
          <span className='dropdown'>
            <p onClick={() => onRouteChange('services')} className='lato flex'>
              {menu.servicos.self}
              <MdArrowDropDown className='self-center' size='25' />
            </p>
            <div className='dropdown-content color-ecma-blue lato'>
              <a href='/'>{menu.servicos.fisioterapia}</a>
              <a href='/'>{menu.servicos.osteopatia}</a>
              <a href='/'>{menu.servicos.pilates}</a>
              <a href='/'>{menu.servicos.treinamento}</a>
            </div>
          </span>
          <span>
            <p onClick={() => onRouteChange('contact')} className='lato'>Contato</p>
          </span>
        </div>
    </nav>
    </>
    );
}

export default NavBar;
