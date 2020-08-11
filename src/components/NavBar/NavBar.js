import React from 'react'
import './NavBar.css'
import { MdMenu, MdArrowDropDown } from 'react-icons/lib/md/'
import links from '../../links'
import { Link, graphql, StaticQuery } from 'gatsby'
import onRouteChange from '../../events/onRouteChange'
import Anchor from '../Anchor/Anchor'
import Image from 'gatsby-image'

const NavBar = () => {
  const menu = {
    home: 'Home',
    clinica: 'O Espaço',
    confessionalidade: 'Nossa Confessionalidade',
    equipe: 'Equipe',
    servicos: {
      self: 'Serviços',
      fisioterapia: 'Fisioterapia',
      osteopatia: 'Osteopatia',
      pilates: 'Pilates Clássico',
      personal: 'Personal Trainer',
      relax: 'Espaço Relaxar'
    },
    blog: 'Blog',
    contato: 'Contato'
  }

  const doShowMobileMenu = (isShow, navigation, mobileNavigation) => {
    if (isShow) {
      mobileNavigation.classList.add('show-mobile-menu')
      navigation.classList.remove('shadow-1')
    } else {
      mobileNavigation.classList.remove('show-mobile-menu')
      navigation.classList.add('shadow-1')
    }
  }

  const showMobileMenu = (isShow) => {
    const mobileNavigation = document.getElementById('mobileNavigation')
    const navigation = document.getElementById('navigation')

    if (isShow === true || isShow === false) {
      doShowMobileMenu(isShow, navigation, mobileNavigation)
    } else {
      if (mobileNavigation.classList.contains('show-mobile-menu')) {
        doShowMobileMenu(false, navigation, mobileNavigation)
      } else {
        doShowMobileMenu(true, navigation, mobileNavigation)
      }
    }
  }

  const showDropdown = (isShow) => {
    const dropdown = document.getElementById('dropdown-content')

    if (isShow) {
      dropdown.classList.add('show-dropdown')
    } else {
      dropdown.classList.remove('show-dropdown')
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          logo: file(relativePath: { eq: "headerlogo.png" }) {
            childImageSharp {
              fixed(width: 126) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        const logo = data.logo.childImageSharp.fixed
        return (
          <>
            <nav id='navigation' className='flex justify-between navigation shadow-1'>
              <Anchor to={links.home}>
                <Image className='headerLogo' fixed={logo} alt='Logo' />
              </Anchor>
              <div className='menuItems'>
                <div className='navItems'>
                  <Link to={links.home} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.home}
                    </p>
                  </Link>
                  <Link to={links.clinic} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.clinica}
                    </p>
                  </Link>
                  <Link to={links.faith} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.confessionalidade}
                    </p>
                  </Link>
                  <Link to={links.team} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.equipe}
                    </p>
                  </Link>
                  <div className='dropdown'>
                    <Link to={links.services.self} onFocus={() => showDropdown(true, false)} className='center items-center menu-item' activeClassName='nav-active'>
                      <p onClick={onRouteChange} className='lato flex'>
                        {menu.servicos.self}
                        <MdArrowDropDown className='self-center' size='25' />
                      </p>
                    </Link>
                    <div id='dropdown-content' className='dropdown-content color-ecma-blue lato'>
                      <Link to={links.services.fisio} onClick={onRouteChange} activeClassName='dropdown-active'>
                        {menu.servicos.fisioterapia}
                      </Link>
                      <Link to={links.services.osteo} onClick={onRouteChange} activeClassName='dropdown-active'>
                        {menu.servicos.osteopatia}
                      </Link>
                      <Link to={links.services.pilates} onClick={onRouteChange} activeClassName='dropdown-active'>
                        {menu.servicos.pilates}
                      </Link>
                      <Link to={links.services.training} onClick={onRouteChange} onBlur={() => showDropdown(false, false)} activeClassName='dropdown-active'>
                        {menu.servicos.personal}
                      </Link>
                      <Link to={links.services.relax} onClick={onRouteChange} onBlur={() => showDropdown(false, false)} activeClassName='dropdown-active'>
                        {menu.servicos.relax}
                      </Link>
                    </div>
                  </div>
                  <Link to={links.blog} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.blog}
                    </p>
                  </Link>
                  <Link to={links.contact} className='center items-center menu-item' activeClassName='nav-active'>
                    <p onClick={onRouteChange} className='lato'>
                      {menu.contato}
                    </p>
                  </Link>
                </div>
                <div className='mobileItem'>
                  <button id='menu-icon' onClick={showMobileMenu} className='menu-icon pointer'>
                    <MdMenu size='30' />
                  </button>
                </div>
              </div>
            </nav>
            <nav id='mobileNavigation' className='mobile-navigation'>
              <div id='mobileMenu' className='menu-mobile'>
                <Link to={links.home} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.home}
                </Link>
                <Link to={links.clinic} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.clinica}
                </Link>
                <Link to={links.faith} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.confessionalidade}
                </Link>
                <Link to={links.team} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.equipe}
                </Link>
                <div className='dropdown'>
                  <Link to={links.services.self} onClick={onRouteChange} className='mobile-menu-item' activeClassName='dropdown-active'>
                    {menu.servicos.self}
                    <MdArrowDropDown className='self-center' size='25' />
                  </Link>
                  <div className='dropdown-content color-ecma-blue lato'>
                    <Link to={links.services.fisio} onClick={onRouteChange} activeClassName='dropdown-active'>
                      {menu.servicos.fisioterapia}
                    </Link>
                    <Link to={links.services.osteo} onClick={onRouteChange} activeClassName='dropdown-active'>
                      {menu.servicos.osteopatia}
                    </Link>
                    <Link to={links.services.pilates} onClick={onRouteChange} activeClassName='dropdown-active'>
                      {menu.servicos.pilates}
                    </Link>
                    <Link to={links.services.training} onClick={onRouteChange} activeClassName='dropdown-active'>
                      {menu.servicos.personal}
                    </Link>
                    <Link to={links.services.relax} onClick={onRouteChange} activeClassName='dropdown-active'>
                      {menu.servicos.relax}
                    </Link>
                  </div>
                </div>
                <Link to={links.blog} onClick={onRouteChange} onBlur={() => showMobileMenu(false)} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.blog}
                </Link>
                <Link to={links.contact} onClick={onRouteChange} onBlur={() => showMobileMenu(false)} className='mobile-menu-item' activeClassName='dropdown-active'>
                  {menu.contato}
                </Link>
              </div>
            </nav>
          </>
        )
      }}
    />
  )
}

export default NavBar
