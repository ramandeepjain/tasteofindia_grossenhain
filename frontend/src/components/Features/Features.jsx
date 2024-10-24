import React from 'react'
import './Features.css'
import { assets } from '../../assets/assets'

const Features = () => {
  return (
    <div className='features'>
      <div className="feature-block">
        <img src={assets.fresh_ingredients} alt="" />
        <div className="feature-text">
          <h5>Frische Zutaten</h5>
          <p>Wir sind stolz darauf, nur die frischesten und hochwertigsten Zutaten zu verwenden, die täglich handverlesen werden, um sicherzustellen, dass jedes Gericht mit authentischem Geschmack und lebendigen Aromen aufwartet.
          </p>
        </div>
      </div>
      <div className="feature-block">
        <img src={assets.menu} alt="" />
        <div className="feature-text">
          <h5>Authentische Speisekarte</h5>
          <p>Unsere Speisekarte enthält traditionelle, authentische indische Rezepte, die mit altehrwürdigen Techniken hergestellt werden, um den wahren Geschmack Indiens in jedes Gericht zu bringen.</p>
        </div>
      </div>
      <div className="feature-block">
        <img src={assets.culinary} alt="" />
        <div className="feature-text">
          <h5>Kulinarisches Fachwissen</h5>
          <p>Unsere Köche verfügen über jahrelange kulinarische Erfahrung und mischen gekonnt authentische indische Gewürze und Techniken, um Gerichte zu kreieren, die die Essenz der verschiedenen Geschmacksrichtungen Indiens einfangen.</p>
        </div>
      </div>
    </div>
  )
}

export default Features