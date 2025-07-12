import React from 'react'
import './MenuCategory.css'
import { assets } from '../../../assets/assets'

const MenuCategory = ({category, changeCategory}) => {
  return (
    <div className='menucategory'>
        <a href="/#menu-list" onClick={()=>changeCategory("Vegetarisch")} className="menu-block">
            <img src={assets.dal} alt="" />
            <div className="menu-overlay">
                Vegetarisch
            </div>
        </a>
        <a href="/#menu-list" onClick={()=>changeCategory("Chicken")} className="menu-block">
            <img src={assets.chicken3} alt="" />
            <div className="menu-overlay">
                Chicken
            </div>
        </a>
        <a href="/#menu-list" onClick={()=>changeCategory("Lamm")} className="menu-block">
            <img src={assets.chicken2} alt="" />
            <div className="menu-overlay">
                Lamm
            </div>
        </a>
        <a href="/#menu-list" onClick={()=>changeCategory("Desserts")} className="menu-block">
            <img src={assets.desserts} alt="" />
            <div className="menu-overlay">
                Desserts
            </div>
        </a>
    </div>
  )
}

export default MenuCategory