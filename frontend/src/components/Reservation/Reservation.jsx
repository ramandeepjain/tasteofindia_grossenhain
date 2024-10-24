import React from 'react'
import './Reservation.css'

const Reservation = () => {
  return (
    <div className='reservation'>
        <div className="reservation-container">
        <div className="reservation-text">
            <h1>Reservieren Sie Ihren Tisch für ein unvergessliches Essen</h1>
            <p>Ob Sie nun die milden, duftenden Gerichte des Nordens oder die kräftigen, würzigen Aromen des Südens mögen, hier ist für jeden Gaumen etwas dabei. </p>
            <p>Kommen Sie und erleben Sie das Herz Indiens auf Ihrem Teller im Taste of India!</p>
        </div>
        <div className="reservation-form">
            <form className='reservation-form-container'>
                <div className="multi-fields">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Phone' />
                <div className="multi-fields">
                    <input type="text" placeholder='Date' />
                    <input type="text" placeholder='Time' />
                </div>
                <input className='reservation-form-request' type="text" placeholder='Special Request' />

                <button>Reservieren</button>

            </form>

        </div>
        </div>
    </div>
  )
}

export default Reservation