import React, { useState } from 'react'
import '../../components/Menu/MenuList/MenuList.css'
import './Shop.css'
import Footer from '../../components/Footer/Footer'
import ExploreMenu from './ExploreMenu'
import FoodDisplay from './FoodDisplay'

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
    const [category, setCategory] = useState("All");
  return (
    <div className='fullmenu' id='fullmenu'>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />

      {/* Allergy Legend */}
      <div style={{ marginBottom: "2em", marginTop: "4em"}}>
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