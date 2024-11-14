import React, { useRef, useEffect } from 'react'
import './About.css'
import { assets } from '../../assets/assets'


const About = () => {
    const boxesRef = useRef([]); // Reference to the element you want to animate

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log("Intersection ratio:", entry.intersectionRatio); // Debugging line                    
                    if (entry.isIntersecting) {
                        // // Remove the animation class to reset animation
                        // entry.target.classList.remove("collapse-animation");

                        // // Trigger a reflow/repaint by adding and removing the class again
                        // // This ensures the animation restarts
                        // void entry.target.offsetWidth; // This forces a reflow (a trick to restart the animation)

                        // Add the animation class again to restart the animation
                        entry.target.classList.add("collapse-height-animation");   
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 } // Adjust threshold as needed
        );

        // Start observing the element
        boxesRef.current.forEach((boxRef) => {
            if (boxRef) observer.observe(boxRef);
        });

        // Cleanup the observer when the component unmounts
        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <div className='about' id='about'>
            <div className="about-container">
                <div className="about-data">
                    <div className="about-data-top">
                        <p>ÜBER UNS</p>
                        <h2> Unsere Philosophie</h2>
                    </div>
                    <div className="about-data-bottom">
                        <p>Bei Taste of India glauben wir, dass Essen mehr als nur eine Mahlzeit ist - es ist eine Erfahrung, die die Seele nährt und die Geschichte eines reichen kulturellen Erbes erzählt.
                            Unser Restaurant entstand aus der Leidenschaft für die authentische indische Küche und dem tiefen Wunsch, die lebendigen Aromen, Texturen und Düfte Indiens mit der Welt zu teilen.
                            Von den rauchigen Tandoori-Gerichten über cremige Currys bis hin zu frisch gebackenem Naan spiegelt jeder Bissen die Vielfalt der kulinarischen Regionen Indiens wider.
                        </p>
                        {/* <button>Über uns</button> */}
                    </div>
                </div>
                <div className="about-img-container">
                    <div className="biryani-img">
                        <img src={assets.biryani} alt="" />
                        <div className="overlay-box-biryani" ref={(el) => boxesRef.current.push(el)}></div>
                    </div>
                    <div className="chicken-img">
                        <img src={assets.paneer} alt="" />
                        <div className="overlay-box-chicken" ref={(el) => boxesRef.current.push(el)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About