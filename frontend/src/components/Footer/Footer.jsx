import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <a href="/#about">
                    <img src={assets.logo} alt="" />
                </a>
                <p>Von den rauchigen Tandoori-Gerichten über cremige Currys bis hin zu frisch gebackenem Naan spiegelt jeder Bissen die Vielfalt der kulinarischen Regionen Indiens wider.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Pages</div>
                    <div className="footer-top-right-col-items">
                        <a href='/#menu-list'>Speisekarte</a>
                        <a href='/#about'>Über uns</a>
                        <a href='/#reservation'>Reservieren</a>
                    </div>
                </div>
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Utility</div>
                    <div className="footer-top-right-col-items">
                        <a href='/datenschutz'>Datenschutz</a>
                        <a href='/impressium'>Impressium</a>
                    </div>
                </div>
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Social</div>
                    <div className="footer-top-right-col-items">
                        <a href='https://www.instagram.com/toigrossenhain/'>Instagram</a>
                        <a href='https://www.facebook.com/profile.php?id=61569365692305'>Facebook</a>
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