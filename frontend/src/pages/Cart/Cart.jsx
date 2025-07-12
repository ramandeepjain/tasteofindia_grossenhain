import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Cart = () => {
  const { cartItems, items, removeFromCart, getTotalCartAmount, addToCart } = useContext(StoreContext);

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
                    <span >€{item.price}</span>
                  </p>

                  <div className="item-counter">
                      <img onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="" />
                      <p>{cartItems[item._id]}</p>
                      <img onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                  </div>
                  <p>{(parseFloat(item.price.replace(',', '.')) * cartItems[item._id]).toFixed(1)}</p>
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
          <h2>  Bestellen </h2>
          <div className="customer-detail-input">
            <div className="multi-fields">
                <input type="text" name='firstName' placeholder='Vorname' />
                <input type="text" name='lastName' placeholder='Name *' required/>
            </div>
            <input type="text" name='phone' placeholder='Telefon *'  required/>
            <p>Mit der Online Bestellung erklären Sie sich einverstanden mit unseren <a href='/datenschutz'>Datenschutzerklärung</a>.</p>
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
