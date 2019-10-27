import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/';
import links from '../../links';
import { NavLink } from "react-router-dom";
import onRouteChange from '../../events/onRouteChange';
import Anchor from '../Anchor/Anchor';


const NavBar = () => {
  const menu = {
    home: "Home",
    clinica: "O Espaço",
    confessionalidade: "Nossa Confessionalidade",
    equipe: "Equipe",
    servicos: {
      self: "Serviços",
      fisioterapia: "Fisioterapia",
      osteopatia: "Osteopatia",
      pilates: "Pilates Clássico",
      personal: "Personal Trainer",
    },
    contato: "Contato",
  }

  const doShowMobileMenu = (isShow, navigation, mobileNavigation) => {
    if (isShow) {
      mobileNavigation.classList.add('show-mobile-menu');
      navigation.classList.remove('shadow-1');
    } else {
      mobileNavigation.classList.remove('show-mobile-menu');
      navigation.classList.add('shadow-1');
    }
  }

  const showMobileMenu = (isShow) => {
    const mobileNavigation = document.getElementById('mobileNavigation');
    const navigation = document.getElementById('navigation');

    if (isShow === true || isShow === false) {
      doShowMobileMenu(isShow, navigation, mobileNavigation);
    } else {
      if (mobileNavigation.classList.contains('show-mobile-menu')) {
        doShowMobileMenu(false, navigation, mobileNavigation);
      } else {
        doShowMobileMenu(true, navigation, mobileNavigation);
      }
    }
  }

  const showDropdown = (isShow) => {
    const dropdown = document.getElementById('dropdown-content');

    if (isShow)
      dropdown.classList.add('show-dropdown');
    else
      dropdown.classList.remove('show-dropdown');
  }

  return (
    <>
      <nav id='navigation' className='flex justify-between navigation shadow-1'>
        <div className='logoContainer'>
          <Anchor to={links.home}>
            <img className='headerLogo' src={logo} alt='Logo' />
          </Anchor>
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
            <NavLink exact to={links.services.self} onFocus={() => showDropdown(true, false)} className='center items-center menu-item' activeClassName='nav-active'>
              <p onClick={onRouteChange} className='lato flex'>
                {menu.servicos.self}
                <MdArrowDropDown className='self-center' size='25' />
              </p>
            </NavLink>
            <div id='dropdown-content' className='dropdown-content color-ecma-blue lato'>
              <NavLink to={links.services.fisio} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.fisioterapia}
              </NavLink>
              <NavLink to={links.services.osteo} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.osteopatia}
              </NavLink>
              <NavLink to={links.services.pilates} onClick={onRouteChange} activeClassName='dropdown-active'>
                {menu.servicos.pilates}
              </NavLink>
              <NavLink to={links.services.training} onClick={onRouteChange} onBlur={() => showDropdown(false, false)} activeClassName='dropdown-active'>
                {menu.servicos.personal}
              </NavLink>
            </div>
          </div>
          <NavLink to={links.contact} className='center items-center menu-item' activeClassName='nav-active'>
            <p onClick={onRouteChange} className='lato'>
              {menu.contato}
            </p>
          </NavLink>
          <button id='menu-icon' onClick={showMobileMenu} className='menu-icon pointer'>
            <MdMenu size='30' />
          </button>
        </div>
      </nav>
      <nav id='mobileNavigation' className='mobile-navigation'>
        <div id='mobileMenu' className='menu-mobile'>
            <NavLink exact to={links.home} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
              {menu.home}
            </NavLink>
            <NavLink to={links.clinic} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
              {menu.clinica}
            </NavLink>
            <NavLink to={links.faith} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
              {menu.confessionalidade}
            </NavLink>
            <NavLink to={links.team} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
              {menu.equipe}
            </NavLink>
          <div className='dropdown'>
              <NavLink exact to={links.services.self} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                {menu.servicos.self}
                <MdArrowDropDown className='self-center' size='25' />
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
                {menu.servicos.personal}
              </NavLink>
            </div>
          </div>
            <NavLink to={links.contact} onClick={onRouteChange} onBlur={() => showMobileMenu(false)} className='mobile-menu-item'  activeClassName='dropdown-active'>
              {menu.contato}
            </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
