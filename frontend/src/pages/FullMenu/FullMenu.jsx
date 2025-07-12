import React, { useState } from 'react'
import '../../components/Menu/MenuList/MenuList.css'
import './FullMenu.css'
import { assets } from '../../assets/assets'
import { items } from '../../components/Menu/MenuList/menu-items'
import Footer from '../../components/Footer/Footer'

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
          const allergySuperscript = item.allergies && item.allergies.length > 0
          ? <sup>{item.allergies.join(', ')}</sup>
          : null;
          if (item.category === category) {
            return (
              <div className="menu-list-item" key={index}>
                <div className="menu-list-item-title">
                  <h5>{item.name} {allergySuperscript}</h5>
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

const allergyInfo = {
  A: "Glutenhaltige Getreide und erzeugnisse",
  A1: "Weizen-glutenhaltige Getreide",
  B: "Krebstiere",
  C: "Eier und -erzeugnisse",
  D: "Fisch und -erzeugnisse",
  E: "Erdnüsse und -erzeugnisse",
  F: "Soja und -erzeugnisse",
  G: "Milch und -erzeugnisse (einschließlich Laktose)",
  H: "Schalenfrüchte und -erzeugnisse",
  H1: "Mandeln",
  H2: "Haselnüsse",
  H3: "Walnüsse",
  H4: "Cashewnüsse",
  I: "Sellerie und -erzeugnisse",
  K: "Senf und -erzeugnisse",
  L: "Sesamsamen und -erzeugnisse",
  M: "Schwefeldioxid und Sulfite",
  N: "Lupinen und -erzeugnisse",
  O: "Weichtiere und -erzeugnisse",
};


const FullMenu = () => {
  return (
    <div className='fullmenu' id='fullmenu'>
      <div className="fullmenu-title">
        <h2>Unsere Speisekarte</h2>
      </div>
      {listContainerLeft(assets.dal_2, "Suppen", "Suppen")}      
      {listContainerRight(assets.pakoras, "Vorspeisen", "Vorspeisen")}
      {listContainerLeft(assets.salat, "Salate", "Salate")}
      {listContainerRight(assets.paneer, "Vegetarisch", "Vegetarisch")}
      {listContainerLeft(assets.chicken4, "Chicken", "Chicken")}
      {listContainerRight(assets.chicken3, "Lamm", "Lamm")}
      {listContainerLeft(assets.duck, "Ente", "Ente")}
      {listContainerRight(assets.fish, "Fisch", "Fisch")}
      {listContainerLeft(assets.prawn, "Scampi", "Scampi")}
      {listContainerRight(assets.tandoori, "Tandoori", "Tandoori")}
      {listContainerLeft(assets.biryani, "Reisgerichte", "Reisgerichte")}
      {listContainerRight(assets.naan, "Beilagen", "Beilagen")}
      {listContainerLeft(assets.gulab_jamun, "Desserts", "Desserts")}
      {/* {listContainerRight(assets.dining_experience_2, "Getränke", "drinks")} */}
      {/* Allergy Legend */}
      <div style={{ marginBottom: "2em"}}>
        {Object.entries(allergyInfo).map(([code, label]) => (
          <span key={code}>
            {code}: {label},{" "}
          </span>
        ))}
      </div>
      <Footer />
    </div>

  )
}

export default FullMenu