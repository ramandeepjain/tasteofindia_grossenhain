import React, { useState } from 'react'
import '../../components/Menu/MenuList/MenuList.css'
import './FullMenu.css'
import { assets } from '../../assets/assets'
import { items } from '../../components/Menu/MenuList/menu-items'

const listContainerImage = (image) => {
  return (
    <div className="fullmenu-list-img">
      <img src={image} alt="" />
    </div>

  )
}

const listContainerList = (name, category) => {
  return (
    <div className="fullmenu-list">
      <h2>{name}</h2>
      <div className="menu-list-items">
        {items.map((item, index) => {
          if (item.category === category) {
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
        })}
      </div>
    </div>

  )
}

const listContainerLeft = (image, name, category) => {
  return (
    <div className="fullmenu-list-container">
      {listContainerImage(image)}
      {listContainerList(name, category)}
    </div>
  )
}

const listContainerRight = (image, name, category) => {
  return (
    <div className="fullmenu-list-container">
      <div className="reverse-order">
        {listContainerList(name, category)}
        {listContainerImage(image)}
      </div>
    </div>
  )
}


const FullMenu = () => {
  return (
    <div className='fullmenu' id='fullmenu'>
      <div className="fullmenu-title">
        <h2>Unsere Speisekarte</h2>
      </div>
      {listContainerLeft(assets.dal_2, "Suppen", "soups")}      
      {listContainerRight(assets.pakoras, "Vorspeisen", "starters")}
      {listContainerLeft(assets.salat, "Salat", "salad")}
      {listContainerRight(assets.paneer, "Vegetarisch", "vegetarian")}
      {listContainerLeft(assets.chicken4, "Chicken", "chicken")}
      {listContainerRight(assets.chicken3, "Lamm", "lamm")}
      {listContainerLeft(assets.duck, "Ente", "ente")}
      {listContainerRight(assets.fish, "Fisch", "fish")}
      {listContainerLeft(assets.prawn, "Scampi", "scampi")}
      {listContainerRight(assets.tandoori, "Tandoori", "tandoori")}
      {listContainerLeft(assets.biryani, "Reisgerichte", "reisgerichte")}
      {listContainerRight(assets.naan, "Beilagen", "side-dishes")}
      {listContainerLeft(assets.gulab_jamun, "Desserts", "dessert")}
      {/* {listContainerRight(assets.dining_experience_2, "Getränke", "drinks")} */}
    </div>

  )
}

export default FullMenu