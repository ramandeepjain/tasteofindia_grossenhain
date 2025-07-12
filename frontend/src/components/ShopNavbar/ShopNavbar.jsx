import React, { useContext } from 'react'
import '../Navbar/Navbar.css'
import './ShopNavbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const ShopNavbar = () => {
    const {getTotalCartAmount} = useContext(StoreContext);

    console.log(getTotalCartAmount());

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
        <div className="cart-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" style={{ width: '50px', height: '50px' }} /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
      </div>
    </div>
  )
}

export default ShopNavbar;