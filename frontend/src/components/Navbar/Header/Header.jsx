import React from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
        <h1> Erleben Sie die Aromen Indiens</h1>
        <div className="header-data">
          <div className="header-data-left">
            <p>Willkommen im Taste of India, wo das reiche Erbe der indischen Küche mit jedem Bissen lebendig wird. 
              Jedes Gericht ist ein Genuss aus authentischen Zutaten, der altehrwürdigen Rezepte und unserer Leidenschaft, Ihnen die feinsten indischen Aromen auf den Tisch zu bringen. 
              </p>
            <a href='#reservation' className='header-button'>Reservieren</a>
          </div>
          <div className="header-img">
            <img src={assets.dining_experience} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header