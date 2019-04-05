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
        <p id='active' className='lato'>Home</p>
      </span>
      <span>
        <p className='lato'>A Clínica</p>
      </span>
      <span>
        <p className='lato'>Nossa Confessionalidade</p>
      </span>
      <span>
        <p className='lato'>Equipe</p>
      </span>
      <span>
        <p className='lato'>Serviços</p>
      </span>
      <span>
        <p className='lato'>Contato</p>
      </span>
    </div>  
    </nav>
    );
}

export default NavBar;
