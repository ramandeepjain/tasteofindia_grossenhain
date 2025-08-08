import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets';
import axios from 'axios';

const Cart = () => {
  const { cartItems, items, setCartItems, removeFromCart, getTotalCartAmount, addToCart, getItemEffectivePrice } = useContext(StoreContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(''); 

  const handleSubmit = async () => {
    const preparedCartItems = [];

    for (const item of items) {
      const quantity = cartItems[item._id];
      if (quantity > 0) {
        const price = parseFloat(item.price.replace(',', '.')); // Convert comma to dot
        preparedCartItems.push({
          item_name: item.name,
          quantity: quantity,
          price: price
        });
      }
    }

    const payload = {
      firstName,
      lastName,
      phone,
      email: email, 
      total_amount: getTotalCartAmount(),
      cartItems: preparedCartItems
    };

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/orders`, payload);
      alert('Bestellung erfolgreich!');
      setCartItems({});
    } catch (error) {
      console.error('Order submit error:', error);
      alert('Serverfehler. Bitte versuchen Sie es erneut.');
    }
  };


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Name</p>
          {/* <p>Preis</p> */}
          <p>Menge</p>
          <p>Summe</p>
        </div>
        <br />
        <hr />
        {items.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index} >
                <div className="cart-items-title cart-items-item">
                  <p>
                    {item.name}
                    <br />
                    <span >€{getItemEffectivePrice(item._id)}</span>
                  </p>

                  <div className="item-counter">
                      <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                      <p>{cartItems[item._id]}</p>
                      <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                  </div>
                  <p>{(parseFloat(getItemEffectivePrice(item._id)) * cartItems[item._id]).toFixed(1)}</p>
                </div>
                <hr />
              </div>
            )
          }
        }
        )}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Gesamtsumme</h2>
          <div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>€{getTotalCartAmount()}</p>
            </div>
          </div>
        </div>
        <div className="customer-details">
          <h2>  Bestellen und Abholen </h2>
          <div className="customer-detail-input">
            <div className="multi-fields">
                <input type="text" name='firstName'  placeholder='Vorname' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type="text" name='lastName' placeholder='Name *' required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <input type="text" name='phone' placeholder='Telefon *' required value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input type="email" name='email' placeholder='Email *' required value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <p>Mit der Online Bestellung erklären Sie sich einverstanden mit unseren <a href='/datenschutz'>Datenschutzerklärung</a>.</p>
            <button onClick={handleSubmit}>Jetzt Abholen</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
