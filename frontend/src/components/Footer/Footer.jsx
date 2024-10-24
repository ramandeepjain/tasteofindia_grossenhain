import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={assets.logo} alt="" />
                <p>At DineNest, our menu features a variety of flavors and dishes to suit every palate. Check out our menu and enjoy a memorable meal</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Pages</div>
                    <div className="footer-top-right-col-items">
                        <a>Our Menu</a>
                        <a>Our Story</a>
                        <a>Contact us</a>
                        <a>Reserver table</a>
                    </div>
                </div>
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Utility</div>
                    <div className="footer-top-right-col-items">
                        <a>Datenschutz</a>
                        <a>Impressium</a>
                    </div>
                </div>
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Social</div>
                    <div className="footer-top-right-col-items">
                        <a>Instagram</a>
                        <a>Facebook</a>
                    </div>
                </div>
            </div>                
        </div>
        <div className="footer-bottom">
            <p> © 2024 TasteOfIndia - All Rights Reserved </p>
        </div>
    </div>
  )
}

export default Footer