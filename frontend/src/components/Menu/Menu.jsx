import React from 'react'
import './Menu.css'
import { assets } from '../../assets/assets'

// 'Mango Mixed Vegetables'
// 'frisches gemischtes Gemüse mit Rahmkäse, Mango-Kokoscreme, Kokosnusspulver und Mangostücken, serviert mit Reis'
// '13,90'

const items = [
    {
        'name': ' Shahi Sabzi (leicht scharf)',
        'description': 'frisches gemischtes Gemüse, Ingwer, Knoblauch und Kokosmilch, Nordindische Art, serviert mit Reis',
        'price': '12,90'
    },
    {
        'name':'Kadhai Paneer (leicht scharf)',
        'description':'frischer hausgemachter Rahmkäse mit Paprika, Zwiebeln, Ingwer und Knoblauch gebraten in Currysoße, serviert mit Reis',
        'price':'13,90'
    },  
    {
        'name':'Palak Paneer',
        'description':'hausgemachter gebratener Rahmkäse mit Spinat, Zwiebeln, Ingwer, Knoblauch und exotischen Gewürzen, serviert mit Reis',
        'price':'13,90'
    },        
    {
        'name':'Dal Makhani',
        'description':'verschiedene Linsen mit Knoblauch, frischem Ingwer und Tomaten, eine Nacht langsam über dem Lehmofen gegart, abgeschmeckt mit indischer Butter, serviert mit Reis',
        'price':'12,90'
    },        
    {
        'name':'Dal Tadka(mittel scharf)',
        'description':'Linsen mit Knoblauch, Ingwer, gehackte Zwiebel, Curryblätter, Senfkerne und rotem Chili, serviert mit Reis',
        'price':'12,90'
    },  
    {
        'name':'Chana Amritsari',
        'description':'Kichererbsen und Kartoffeln, in einer nordindischen Soße aus einer speziellen würzigen Mischung aus Amritsar, gekocht süß und sauer im Geschmack, serviert mit Reis',
        'price':'12,90'
    },  
    {
        'name':'Aloo Gobhi Masala (leicht scharf)',
        'description':'gebratene Kartoffeln, Blumenkohl, gehackte Zwiebeln und Currysoße, serviert mit Reis',
        'price':'12,90'
    },
    {
        'name':'Bhindi Do Pyaza (mittel scharf)',
        'description':'frisches indisches Okragemüse mit Ingwer, Knoblauch und Zwiebeln in Currysoße nach nordindischer Art, serviert mit Reis',
        'price':'13,90'
    },
    {
        'name':'Shahi Paneer (leicht scharf)',
        'description':'hausgemachter Frischkäse mit Knoblauch, Ingwer, Zwiebeln und Tomaten-Curry-Soße, serviert mit Reis',
        'price':'13,90'
    },
    {
        'name':'Taj Mahal Kofte',
        'description':'mit hausgemachter Cashew-Screen-Soße, passend zu Rahmkäse und Rosinen-Gericht nach königlichem Rezept, serviert mit Reis',
        'price':'13,90'
    },
    {
        'name':'Paneer Makhni',
        'description':'hausgemachter Rahmkäse mit Knoblauch, Ingwer und Tomaten-Cashew-Currysoße, serviert mit Reis',
        'price':'13,90'
    },
    {
        'name':'Navratan Korma',
        'description':'frische gemischte Gemüsesorten mit Rahmkäse, Cashewnuss-Soße, Cashews und Rosinen, serviert mit Reis',
        'price':'13,90'
    }    
]


const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu-title">
            <p>Taste of India</p>
            <h2>Unser köstliches Menü</h2>
        </div>
        <div className="menu-list-container">
            <div className="menu-item-img">
                <img src={assets.dining_experience_2} alt="" />
            </div>
            <div className="menu-list">
                <div className="menu-list-tabs">
                    <p className='tab-selected'>Vegetarisch</p>
                    <p>Main Dishes</p>
                    <p>Snacks</p>
                    <p>Desserts</p>
                </div>
                <div className="menu-list-items">
                    {items.map((item, index)=>{
                        return (
                            <div className="menu-list-item">
                                <div className="menu-list-item-title">
                                    <h5>{item.name}</h5>
                                    <h5>{item.price} €</h5>
                                </div>
                                
                                <p>{item.description}</p>
                            </div>
                        )
                    }

                    )}

                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu