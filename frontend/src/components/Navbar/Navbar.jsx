import React, {useEffect, useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

function toggleMenu() {
  const navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.classList.toggle('show');
  if (navbarMenu.classList.contains('show')) {
    navbarMenu.style.animation = 'moveDown .4s forwards';
  } else {
    navbarMenu.style.animation = 'moveUp .4s forwards';
  }
  
}

export const list = (
  <ul className='navbar-menu' id='navbarMenu'>
    <a href='/#about' className='navlink'>Über uns</a>
    <a href='/speisekarte' className='navlink'>Speisekarte</a>
    <a href='/#reservation' className='navlink set'>Reservieren</a>
  </ul>
)

const Navbar = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 991);

  useEffect(() => {
      // Function to handle window resize events
      const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 991);
      };

      // Add event listener to window resize
      window.addEventListener('resize', handleResize);

      // Clean up event listener when the component is unmounted
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <div className="toggle-button" onClick={toggleMenu}>
          <svg width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
        </div>
        {isLargeScreen && list}
      </div>
      {!isLargeScreen && list}
    </div>
  )
}

export default Navbar;