import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';
import links from '../../links';
import { Link, NavLink } from "react-router-dom";


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
            <NavLink to={links.services.fisio} activeClassName='dropdown-active'>
              <p onClick={onRouteChange}>
                {menu.servicos.fisioterapia}
              </p>
            </NavLink>
            <NavLink to={links.services.osteo} activeClassName='dropdown-active'>
              <p onClick={onRouteChange}>
                {menu.servicos.osteopatia}
              </p>
            </NavLink>
            <NavLink to={links.services.pilates} activeClassName='dropdown-active'>
              <p onClick={onRouteChange}>
                {menu.servicos.pilates}
              </p>
            </NavLink>
            <NavLink to={links.services.training} activeClassName='dropdown-active'>
              <p onClick={onRouteChange}>
                {menu.servicos.treinamento}
              </p>
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
      <div id='mobileMenu' className='menu-mobile hma'>
          <div>
            <NavLink to={links.home}>
              <p onClick={onRouteChange} id='active' className='lato'>
                {menu.home}
              </p>
            </NavLink>
          </div>
          <div>
            <NavLink to={links.clinic}>
              <p onClick={onRouteChange} className='lato'>
                {menu.clinica}
              </p>
            </NavLink>
          </div>
          <div>
            <NavLink to={links.faith}>
              <p onClick={onRouteChange} className='lato'>
                {menu.confessionalidade}
              </p>
            </NavLink>
          </div>
          <div>
            <NavLink to={links.team}>
              <p onClick={onRouteChange} className='lato'>
                {menu.equipe}
              </p>
            </NavLink>
          </div>
          <div className='dropdown'>
            <NavLink to={links.services.self}>
              <p onClick={onRouteChange} className='lato flex'>
                {menu.servicos.self}
                <MdArrowDropDown className='self-center' size='25' />
              </p>
            </NavLink>
            <div className='dropdown-content color-ecma-blue lato'>
              <NavLink to={links.services.fisio}>
                <p onClick={onRouteChange}>
                  {menu.servicos.fisioterapia}
                </p>
              </NavLink>
              <NavLink to={links.services.osteo}>
                <p onClick={onRouteChange}>
                  {menu.servicos.osteopatia}
                </p>
              </NavLink>
              <NavLink to={links.services.pilates}>
                <p onClick={onRouteChange}>
                  {menu.servicos.pilates}
                </p>
              </NavLink>
              <NavLink to={links.services.training}>
                <p onClick={onRouteChange}>
                  {menu.servicos.treinamento}
                </p>
              </NavLink>
            </div>
          </div>
          <div>
            <NavLink to={links.contact}>
              <p onClick={onRouteChange} className='lato'>
                {menu.contato}
              </p>
            </NavLink>
          </div>
        </div>
    </nav>
    </>
    );
}

export default NavBar;
