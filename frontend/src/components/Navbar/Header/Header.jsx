import React, { useRef, useEffect, useState } from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  const [pageLoaded, setPageLoaded] = useState(false); // Track if the page has loaded
  const [isAnimating, setIsAnimating] = useState(false); // Control animation trigger

  useEffect(() => {
    // Check if the page has already loaded (to support fast navigation scenarios)
    if (document.readyState === 'complete') {
      setPageLoaded(true);
    } else {
      // Attach load event listener
      const handleLoad = () => {
        setPageLoaded(true);
      };
      window.addEventListener('load', handleLoad);

      // Cleanup listener
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, []);

  useEffect(() => {
    // Trigger animation every time the component mounts, but only if the page is loaded
    if (pageLoaded) {
      setIsAnimating(true);
    }

    // Cleanup/reset animation state on unmount
    return () => {
      setIsAnimating(false);
    };
  }, [pageLoaded]); // Runs only when `pageLoaded` changes

  return (
    <div className='header'>
      <div className="header-container">
        <h1 className={`${isAnimating ? 'letter-animate' : ''}`} > Erleben Sie die Aromen Indiens </h1>
        <div className="header-data">
          <div className={`header-data-left ${isAnimating ? 'letter-animate' : ''}`} >
            <p>Willkommen bei Taste of India, dem ersten indischen Restaurant in Großenhain, das sich stolz im historischen und charmanten Roten Haus befindet. Hier wird jedes Gericht mit authentischen Zutaten und einer großen Leidenschaft zubereitet, um die besten indischen Aromen auf Ihren Teller zu bringen.
            </p>
            <a href='#reservation' className='header-button'>Reservieren</a>
          </div>
          <div className="header-img">
            <img src={assets.spices_indianbowls} alt="" />
            <div className={`box ${isAnimating ? 'collapse-animation' : ''}`} ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header