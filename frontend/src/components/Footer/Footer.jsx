import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={assets.logo} alt="" />
                <p>Von den rauchigen Tandoori-Gerichten über cremige Currys bis hin zu frisch gebackenem Naan spiegelt jeder Bissen die Vielfalt der kulinarischen Regionen Indiens wider.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-top-right-col">
                    <div className='footer-top-right-col-title'>Pages</div>
                    <div className="footer-top-right-col-items">
                        <a>Speisekarte</a>
                        <a>Über uns</a>
                        <a>Reservieren</a>
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