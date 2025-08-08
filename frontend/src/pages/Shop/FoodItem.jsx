import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, allergies, category}) => {

  const {cartItems, addToCart, removeFromCart, getItemEffectivePrice, isLunchTime, isOfferCategory} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                {/* <img src={assets.rating_stars} alt="" /> */}
            </div>
            <p className='food-item-desc'>
              {description}
              {allergies && allergies.length > 0 && (
                <span className="food-item-allergies">
                  <br />
                  <strong>Info: </strong>{allergies.join(', ')}
                </span>
              )}
            </p>
            <div className='food-item-footer'>
              {isOfferCategory(category) && isLunchTime() ? (
                <p className='food-item-price'>
                  <span style={{ textDecoration: 'line-through', color: 'gray' }}>€{price}</span> 
                  &nbsp;<span>  €{getItemEffectivePrice(id)}</span>
                </p>
              ) : (
                <p className='food-item-price'>€{price}</p>
              )}
              {!cartItems[id] 
                ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                : <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
              }
            </div>
        </div>
    </div>
  )
}

export default FoodItem
