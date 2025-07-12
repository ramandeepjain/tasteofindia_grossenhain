import React, { useState, useEffect } from 'react'
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

function isWorkHour() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  // 11:00-14:00 or 17:00-22:00
  const inFirst = (hour > 11 || (hour === 11 && minute >= 0)) && (hour < 14 || (hour === 14 && minute === 0));
  const inSecond = (hour > 17 || (hour === 17 && minute >= 0)) && (hour < 22 || (hour === 22 && minute === 0));
  return inFirst || inSecond;
}

const FullMenu = () => {
  const [category, setCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!isWorkHour()) {
      setShowPopup(true);
    }
  }, []);

  return (
    <div className='fullmenu' id='fullmenu'>
      {showPopup && (
        <div className="work-hours-popup" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}>
          <div style={{
            background: "white",
            padding: "2em",
            borderRadius: "12px",
            textAlign: "center",
            maxWidth: "90vw"
          }}>
            <h2>Außerhalb der Öffnungszeiten</h2>
            <p>
              Unser Shop ist von <strong>11:00–14:00</strong> und <strong>17:00–22:00</strong> geöffnet.<br />
              Sie können aktuell keine Bestellung aufgeben.
            </p>
            <button onClick={() => setShowPopup(false)} style={{
              marginTop: "1em",
              padding: "0.5em 2em",
              borderRadius: "8px",
              border: "none",
              background: "#e74c3c",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Vorbestellen
            </button>
          </div>
        </div>
      )}
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