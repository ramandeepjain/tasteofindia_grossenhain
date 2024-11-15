import React, { useState } from 'react'
import './MenuList.css'
import { assets } from '../../../assets/assets'
import { items } from './menu-items'

const MenuList = ({category, changeCategory}) => {

  return (
    <div className='menu' id='menu'>
        <div className="menu-title">
            <p>Taste of India</p>
            <h2>Unsere beliebten Gerichte</h2>
        </div>
        <div className="menu-list-container">
            <div className="menu-item-img">
                <img src={assets.dining_experience_3} alt="" />
            </div>
            <div className="menu-list" id='menu-list'>
                <div className="menu-list-tabs">
                    <div onClick={()=>changeCategory("vegetarian")} className={category==="vegetarian"?"tab-selected":"tab"}>Vegetarisch</div>
                    <div onClick={()=>changeCategory("chicken")} className={category==="chicken"?"tab-selected":"tab"}>Chicken</div>
                    <div onClick={()=>changeCategory("lamm")} className={category==="lamm"?"tab-selected":"tab"}>Lamm</div>
                    <div onClick={()=>changeCategory("dessert")} className={category==="dessert"?"tab-selected":"tab"}>Dessert</div>
                </div>
                <div className="menu-list-items">
                    {items.map((item, index)=>{
                        if (category===item.category) {
                            return (
                                <div className="menu-list-item" key={index}>
                                    <div className="menu-list-item-title">
                                        <h5>{item.name}</h5>
                                        <h5>{item.price} €</h5>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                    }

                    )}

                </div>

            </div>
        </div>
        <a href='/speisekarte' className='menu-button'>Volle Speisekarte</a>
    </div>
  )
}

export default MenuList