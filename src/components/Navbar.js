import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./udanaLogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          
            <img src={logo} alt='logo' id='udanaLogo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Waralaba
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Masuk
              </Link>
            </li>

            <li>
              <Link
                to='/products'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Mulai Daftar
              </Link>
            </li>
          </ul>
          <div className="button-container">
          {button && <Button buttonStyle='btn--outline'>Masuk</Button>}
          {button && <Button buttonStyle='btn--fill'>Mulai Daftar</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
