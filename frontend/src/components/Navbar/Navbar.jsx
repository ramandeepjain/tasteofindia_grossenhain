import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
            <ul className='navbar-menu'>
                <a href='/#about' className='navlink'>Über uns</a>
                <a href='/speisekarte' className='navlink'>Speisekarte</a>
                <a href='/#reservation' className='navlink'>Reservieren</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar