import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';
import links from '../../links';
import { Link, NavLink } from "react-router-dom";
import onRouteChange from '../../events/onRouteChange';


const NavBar = () => {
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
    <nav id='navigation' className='flex justify-between navigation shadow-1'>
      <div className='logoContainer'>
        <Link to={links.home} onClick={onRouteChange}>
          <img  className='headerLogo' src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='menuItems'>
        <NavLink exact to={links.home} className='center items-center menu-item' activeClassName='nav-active'>
          <p onClick={onRouteChange} className='lato'>
            {menu.home}
          </p>
        </NavLink>
        <NavLink to={links.clinic} className='center items-center menu-item' activeClassName='nav-active'>
          <p onClick={onRouteChange} className='lato'>
            {menu.clinica}
          </p>
        </NavLink>
        <NavLink to={links.faith} className='center items-center menu-item' activeClassName='nav-active'>
          <p onClick={onRouteChange} className='lato'>
            {menu.confessionalidade}
          </p>
        </NavLink>
        <NavLink to={links.team} className='center items-center menu-item' activeClassName='nav-active'>
          <p onClick={onRouteChange} className='lato'>
            {menu.equipe}
          </p>
        </NavLink>
        <div className='dropdown'>
          <NavLink exact to={links.services.self} className='center items-center menu-item' activeClassName='nav-active'>
            <p onClick={onRouteChange} className='lato flex'>
              {menu.servicos.self}
              <MdArrowDropDown className='self-center' size='25' />
            </p>
          </NavLink>
          <div className='dropdown-content color-ecma-blue lato'>
            <NavLink to={links.services.fisio} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.fisioterapia}
            </NavLink>
            <NavLink to={links.services.osteo} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.osteopatia}
            </NavLink>
            <NavLink to={links.services.pilates} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.pilates}
            </NavLink>
            <NavLink to={links.services.training} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.treinamento}
            </NavLink>
          </div>
        </div>
        <NavLink to={links.contact} className='center items-center menu-item' activeClassName='nav-active'>
          <p onClick={onRouteChange} className='lato'>
            {menu.contato}
          </p>
        </NavLink>
        <MdMenu onClick={showMobileMenu} className='menu-icon pointer' size='30' />
      </div>  
    </nav>
    <nav id='mobileNavigation' className='mobile-navigation'>
      <div id='mobileMenu' className='menu-mobile'>
        <div className='mobile-menu-item'>
          <NavLink exact to={links.home} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.home}
          </NavLink>
        </div>
        <div className='mobile-menu-item'>
          <NavLink to={links.clinic} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.clinica}
          </NavLink>
        </div>
        <div className='mobile-menu-item'>
          <NavLink to={links.faith} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.confessionalidade}
          </NavLink>
        </div>
        <div className='mobile-menu-item'>
          <NavLink to={links.team} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.equipe}
          </NavLink>
        </div>
        <div className='dropdown'>
          <div className='mobile-menu-item'>
            <NavLink exact to={links.services.self} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.self}
                <MdArrowDropDown className='self-center' size='25' />
            </NavLink>
          </div>
          <div className='dropdown-content color-ecma-blue lato hma'>
            <NavLink to={links.services.fisio} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.servicos.fisioterapia}
            </NavLink>
            <NavLink to={links.services.osteo} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.servicos.osteopatia}
            </NavLink>
            <NavLink to={links.services.pilates} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.servicos.pilates}
            </NavLink>
            <NavLink to={links.services.training} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.servicos.treinamento}
            </NavLink>
          </div>
        </div>
        <div className='mobile-menu-item'>
          <NavLink to={links.contact} onClick={onRouteChange} activeClassName='dropdown-active'>
              {menu.contato}
          </NavLink>
        </div>
      </div>
    </nav>
    </>
    );
}

export default NavBar;
