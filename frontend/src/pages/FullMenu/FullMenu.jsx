import React, { useState } from 'react'
import '../../components/Menu/Menu.css'
import './FullMenu.css'
import { assets } from '../../assets/assets'
import { items } from '../../components/Menu/menu-items'

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
      {listContainerLeft(assets.paneer, "Vegetarisch", "vegetarian")}
      {listContainerRight(assets.chicken, "Chicken", "chicken")}
      {listContainerLeft(assets.mutton, "Lamm", "lamm")}
      {listContainerRight(assets.dining_experience_2, "Ente", "ente")}
      {listContainerLeft(assets.dining_experience_2, "Fisch", "fish")}
      {listContainerRight(assets.dining_experience_2, "Scampi", "scampi")}
      {listContainerLeft(assets.dining_experience_2, "Tandoori", "tandoori")}
      {listContainerRight(assets.dining_experience_2, "Reisgerichte", "reisgerichte")}
      {listContainerLeft(assets.dining_experience_2, "Suppen", "soups")}      
      {listContainerRight(assets.dining_experience_2, "Vorspeisen", "starters")}
      {listContainerLeft(assets.dining_experience_2, "Beilagen", "side-dishes")}
      {listContainerRight(assets.dining_experience_2, "Salat", "salad")}
      {listContainerLeft(assets.dining_experience_2, "Desserts", "dessert")}
      {listContainerRight(assets.dining_experience_2, "Getränke", "drinks")}
    </div>

  )
}

export default FullMenu