import React from 'react';
import './NavBar.css'
import logo from './headerlogo.png';


const NavBar = () => {
    return (
    <nav className='navigation'>
    <div className='logoContainer'>
      <a href='/'>
        <img  className='headerLogo' src={logo} alt='Logo' />
      </a>
    </div>
    <div className='menuItems'>
      <span>
        <p id='active' nameClass='lato'>Home</p>
      </span>
      <span>
        <p nameClass='lato'>A Clínica</p>
      </span>
      <span>
        <p nameClass='lato'>Nossa Confessionalidade</p>
      </span>
      <span>
        <p nameClass='lato'>Equipe</p>
      </span>
      <span>
        <p nameClass='lato'>Serviços</p>
      </span>
      <span>
        <p nameClass='lato'>Contato</p>
      </span>
    </div>  
    </nav>
    );
}

export default NavBar;
