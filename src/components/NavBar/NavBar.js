import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';


const NavBar = ({onRouteChange}) => {
    const menu = {
      home: "Home",
      clinica: "A Clínica",
      confessionalidade: "Nossa Confessionalidade",
      equipe: "Equipe",
      servicos: {
        self: "Serviços",
        fisioterapia: "Fisioterapia",
        osteopatia: "Osteopatia",
        pilates: "Pilates",
        treinamento: "Treinamento Físico",
      },
      contato: "Contato",
    }

    const showMobileMenu = () => {
      const mobileNavigation = document.getElementById('mobileNavigation');
      const navigation = document.getElementById('navigation');

      if (mobileNavigation.classList.contains('show-mobile-menu')) { // hide mobile menu
        mobileNavigation.classList.remove('show-mobile-menu');
        navigation.classList.add('shadow-1');
      } else { // show mobile menu
        mobileNavigation.classList.add('show-mobile-menu');
        navigation.classList.remove('shadow-1');
      
      }
    }

    return (
    <>
    <nav id='navigation' className='navigation shadow-1'>
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
          <p onClick={() => onRouteChange('clinica')} className='lato'>{menu.clinica}</p>
        </span>
        <span>
          <p onClick={() => onRouteChange('confessionalidade')} className='lato'>{menu.confessionalidade}</p>
        </span>
        <span>
          <p onClick={() => onRouteChange('equipe')} className='lato'>{menu.equipe}</p>
        </span>
        <span className='dropdown'>
        <p onClick={() => onRouteChange('services')} className='lato flex'>
            {menu.servicos.self}
            <MdArrowDropDown className='self-center' size='25' />
        </p>
        <div className='dropdown-content color-ecma-blue lato'>
          <p onClick={() => onRouteChange('fisioterapia')}>{menu.servicos.fisioterapia}</p>
          <p onClick={() => onRouteChange('osteopatia')}>{menu.servicos.osteopatia}</p>
          <p onClick={() => onRouteChange('pilates')}>{menu.servicos.pilates}</p>
          <p onClick={() => onRouteChange('treinamento')}>{menu.servicos.treinamento}</p>
        </div>
        </span>
        <span>
          <p onClick={() => onRouteChange('contact')} className='lato'>{menu.contato}</p>
        </span>
        <MdMenu onClick={showMobileMenu} className='menu-icon pointer' size='30' />
      </div>  
    </nav>
    <nav id='mobileNavigation' className='mobile-navigation'>
      <div id='mobileMenu' className='menu-mobile hma'>
          <span>
            <p onClick={() => onRouteChange('/')} id='active' className='lato'>{menu.home}</p>
          </span>
          <span>
            <p onClick={() => onRouteChange('clinica')} className='lato'>{menu.clinica}</p>
          </span>
          <span>
            <p onClick={() => onRouteChange('confessionalidade')} className='lato'>{menu.confessionalidade}</p>
          </span>
          <span>
            <p onClick={() => onRouteChange('equipe')} className='lato'>{menu.equipe}</p>
          </span>
          <span className='dropdown'>
            <p onClick={() => onRouteChange('services')} className='lato flex'>
              {menu.servicos.self}
              <MdArrowDropDown className='self-center' size='25' />
            </p>
            <div className='dropdown-content color-ecma-blue lato'>
              <p onClick={() => onRouteChange('fisioterapia')}>{menu.servicos.fisioterapia}</p>
              <p onClick={() => onRouteChange('osteopatia')}>{menu.servicos.osteopatia}</p>
              <p onClick={() => onRouteChange('pilates')}>{menu.servicos.pilates}</p>
              <p onClick={() => onRouteChange('treinamento')}>{menu.servicos.treinamento}</p>
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
