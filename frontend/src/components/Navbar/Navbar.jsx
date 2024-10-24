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
                <Link to='/' className='navlink'>About</Link>
                <a href='#explore-menu' className='navlink'>Menu</a>
                <a href='#app-download' className='navlink'>Gallery</a>
                <a href='#footer' className='navlink'>Reviews</a>
                <a href='#footer' className='navlink'>Contact</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar