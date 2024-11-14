import React, { useRef, useEffect } from 'react'
import './Header.css'
import { assets } from '../../../assets/assets'

const Header = () => {
  const boxRef = useRef(null); // Reference to the element you want to animate
  const letterRefs = useRef([]); // Reference to the element you want to animate

  useEffect(() => {
    const startObserving = () => {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // // Remove the animation class to reset animation
              // entry.target.classList.remove("collapse-animation");

              // // Trigger a reflow/repaint by adding and removing the class again
              // // This ensures the animation restarts
              // void entry.target.offsetWidth; // This forces a reflow (a trick to restart the animation)

              // Add the animation class again to restart the animation
              entry.target.classList.add("collapse-animation");
              
              observer1.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );

      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("letter-animate")
              observer2.unobserve(entry.target);
            }
          })
        },
        { threshold: 0.5 }
      );

      // Start observing the element
      if (boxRef.current) observer1.observe(boxRef.current);
      letterRefs.current.forEach((letterRef) => {
        if (letterRef) observer2.observe(letterRef);
      });

      // Cleanup the observer when the component unmounts
      return () => {
        observer1.disconnect();
        observer2.disconnect();
      };
    };

    // Wait for the page to load before setting up the observer
    window.addEventListener("load", startObserving);

    // Cleanup the load event listener on unmount
    return () => {
      window.removeEventListener("load", startObserving);
    };
  }, []);


  return (
    <div className='header'>
      <div className="header-container">
        <h1 ref={(el) => letterRefs.current.push(el)} > Erleben Sie die Aromen Indiens </h1>
        <div className="header-data">
          <div className="header-data-left" ref={(el) => letterRefs.current.push(el)} >
            <p>Willkommen im Taste of India, wo das reiche Erbe der indischen Küche mit jedem Bissen lebendig wird.
              Jedes Gericht ist ein Genuss aus authentischen Zutaten, der altehrwürdigen Rezepte und unserer Leidenschaft, Ihnen die feinsten indischen Aromen auf den Tisch zu bringen.
            </p>
            <a href='#reservation' className='header-button'>Reservieren</a>
          </div>
          <div className="header-img">
            <img src={assets.spices_indianbowls} alt="" />
            <div className="box" ref={boxRef}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header