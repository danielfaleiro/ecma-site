import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';
import links from '../../links';
import { Link } from "react-router-dom";


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
        <Link to={links.home} onClick={onRouteChange}>
          <img  className='headerLogo' src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='menuItems'>
        <span>
          <Link to={links.home}>
            <p onClick={onRouteChange} id='active' className='lato'>
              {menu.home}
            </p>
          </Link>
        </span>
        <span>
          <Link to={links.clinic}>
            <p onClick={onRouteChange} className='lato'>
              {menu.clinica}
            </p>
          </Link>
        </span>
        <span>
          <Link to={links.faith}>
            <p onClick={onRouteChange} className='lato'>
              {menu.confessionalidade}
            </p>
          </Link>
        </span>
        <span>
          <Link to={links.team}>
            <p onClick={onRouteChange} className='lato'>
              {menu.equipe}
            </p>
          </Link>
        </span>
        <span className='dropdown'>
          <Link to={links.services.self}>
            <p onClick={onRouteChange} className='lato flex'>
              {menu.servicos.self}
              <MdArrowDropDown className='self-center' size='25' />
            </p>
          </Link>
          <div className='dropdown-content color-ecma-blue lato'>
            <Link to={links.services.fisio}>
              <p onClick={onRouteChange}>
                {menu.servicos.fisioterapia}
              </p>
            </Link>
            <Link to={links.services.osteo}>
              <p onClick={onRouteChange}>
                {menu.servicos.osteopatia}
              </p>
            </Link>
            <Link to={links.services.pilates}>
              <p onClick={onRouteChange}>
                {menu.servicos.pilates}
              </p>
            </Link>
            <Link to={links.services.training}>
              <p onClick={onRouteChange}>
                {menu.servicos.treinamento}
              </p>
            </Link>
          </div>
        </span>
        <span>
          <Link to={links.contact}>
            <p onClick={onRouteChange} className='lato'>
              {menu.contato}
            </p>
          </Link>
        </span>
        <MdMenu onClick={showMobileMenu} className='menu-icon pointer' size='30' />
      </div>  
    </nav>
    <nav id='mobileNavigation' className='mobile-navigation'>
      <div id='mobileMenu' className='menu-mobile hma'>
          <span>
            <Link to={links.home}>
              <p onClick={onRouteChange} id='active' className='lato'>
                {menu.home}
              </p>
            </Link>
          </span>
          <span>
            <Link to={links.clinic}>
              <p onClick={onRouteChange} className='lato'>
                {menu.clinica}
              </p>
            </Link>
          </span>
          <span>
            <Link to={links.faith}>
              <p onClick={onRouteChange} className='lato'>
                {menu.confessionalidade}
              </p>
            </Link>
          </span>
          <span>
            <Link to={links.team}>
              <p onClick={onRouteChange} className='lato'>
                {menu.equipe}
              </p>
            </Link>
          </span>
          <span className='dropdown'>
            <Link to={links.services.self}>
              <p onClick={onRouteChange} className='lato flex'>
                {menu.servicos.self}
                <MdArrowDropDown className='self-center' size='25' />
              </p>
            </Link>
            <div className='dropdown-content color-ecma-blue lato'>
              <Link to={links.services.fisio}>
                <p onClick={onRouteChange}>
                  {menu.servicos.fisioterapia}
                </p>
              </Link>
              <Link to={links.services.osteo}>
                <p onClick={onRouteChange}>
                  {menu.servicos.osteopatia}
                </p>
              </Link>
              <Link to={links.services.pilates}>
                <p onClick={onRouteChange}>
                  {menu.servicos.pilates}
                </p>
              </Link>
              <Link to={links.services.training}>
                <p onClick={onRouteChange}>
                  {menu.servicos.treinamento}
                </p>
              </Link>
            </div>
          </span>
          <span>
            <Link to={links.contact}>
              <p onClick={onRouteChange} className='lato'>
                {menu.contato}
              </p>
            </Link>
          </span>
        </div>
    </nav>
    </>
    );
}

export default NavBar;
