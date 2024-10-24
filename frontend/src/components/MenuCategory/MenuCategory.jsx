import React from 'react'
import './MenuCategory.css'
import { assets } from '../../assets/assets'

const MenuCategory = () => {
  return (
    <div className='menucategory'>
        <div className="menu-block">
            <img src={assets.dal} alt="" />
            <div className="menu-overlay">
                Vegetarian
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.biryani} alt="" />
            <div className="menu-overlay">
                Chicken
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.prawn} alt="" />
            <div className="menu-overlay">
                Mutton
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.spices} alt="" />
            <div className="menu-overlay">
                Desserts
            </div>
        </div>
    </div>
  )
}

export default MenuCategory