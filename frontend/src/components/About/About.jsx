import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <div className='about'>
        <div className="about-container">
            <div className="about-data">
                <div className="about-data-top">
                    <p>ÜBER UNS</p>
                    <h2> Unsere Geschichte</h2>
                </div>
                <div className="about-data-bottom">
                    <p>Bei Taste of India glauben wir, dass Essen mehr als nur eine Mahlzeit ist - es ist eine Erfahrung, die die Seele nährt und die Geschichte eines reichen kulturellen Erbes erzählt. 
                        Unser Restaurant entstand aus der Leidenschaft für die authentische indische Küche und dem tiefen Wunsch, die lebendigen Aromen, Texturen und Düfte Indiens mit der Welt zu teilen. 
                        Von den rauchigen Tandoori-Gerichten über cremige Currys bis hin zu frisch gebackenem Naan spiegelt jeder Bissen die Vielfalt der kulinarischen Regionen Indiens wider. 
                        </p>
                    <button>Über uns</button>
                </div>            
            </div>
            <div className="about-img-container">
                <img className='biryani-img' src={assets.biryani} alt="" />
                <img className='chicken-img' src={assets.paneer} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About