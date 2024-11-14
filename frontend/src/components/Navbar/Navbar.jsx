import React, {useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
// import { ScreenContext } from '../../context/ScreenContext';

function toggleMenu() {
  const navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.classList.toggle('show');
  console.log(navbarMenu.classList)
  if (navbarMenu.classList.contains('show')) {
    navbarMenu.style.animation = 'moveDown .4s forwards';
    console.log('up bakcwards')
  } else {
    navbarMenu.style.animation = 'moveUp .4s forwards';
    console.log('up forwards')
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
  // const isLargeScreen = useContext(ScreenContext);
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <div className="toggle-button" onClick={toggleMenu}>
          <svg width="2em" height="2em" viewBox="0 0 24 24"><path fill="white" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" /></svg>
        </div>
      </div>
      {list}
    </div>
  )
}

export default Navbar;