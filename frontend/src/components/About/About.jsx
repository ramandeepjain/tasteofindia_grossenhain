import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'


window.addEventListener('load', ()=> {
    // Select the element you want to animate
    const box = document.querySelector(".overlay-box");

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the animation class when the element is in view
                entry.target.classList.add("collapse-animation");
                observer.unobserve(entry.target); // Optional: Stop observing once animation is triggered
            }
        });
    }, { threshold: 0.5 }); // Adjust threshold as needed

    // Start observing the element
    observer.observe(box);
})

const About = () => {

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
                        <div className="overlay-box"></div>
                    </div>
                    <div className="chicken-img">
                        <img src={assets.paneer} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About