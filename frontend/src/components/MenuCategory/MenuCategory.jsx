import React from 'react'
import './MenuCategory.css'
import { assets } from '../../assets/assets'

const MenuCategory = () => {
  return (
    <div className='menucategory'>
        <div className="menu-block">
            <img src={assets.dal} alt="" />
            <div className="menu-overlay">
                Vegetarisch
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.paneer} alt="" />
            <div className="menu-overlay">
                Chicken
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.chicken} alt="" />
            <div className="menu-overlay">
                Lamm
            </div>
        </div>
        <div className="menu-block">
            <img src={assets.spices} alt="" />
            <div className="menu-overlay">
                Dessert
            </div>
        </div>
    </div>
  )
}

export default MenuCategory