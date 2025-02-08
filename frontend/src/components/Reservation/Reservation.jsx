import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.css';

const defaultFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    nPeople: '', 
    occasion: '',
    specialRequest: ''
};

// Function to generate time slots between start and end hours in 15-minute intervals
const generateTimeSlots = (startHour, endHour, interval) => {
    const slots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += interval) {
            const formattedHour = String(hour).padStart(2, '0');
            const formattedMinute = String(minute).padStart(2, '0');
            slots.push(`${formattedHour}:${formattedMinute}`);
        }
    }
    return slots;
};

// Blocked reservations (format: 'YYYY-MM-DD': ['HH:MM', ...])
const blockedReservations = {
    '2025-02-14': generateTimeSlots(17, 21, 15), // Example: Fully booked on Valentine's Day at these times
};

const getTimeSlotsForDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (dayOfWeek === 0) { // Sunday
        return generateTimeSlots(17, 21, 15);
    } else {
        return [
            ...generateTimeSlots(11, 13, 15),
            ...generateTimeSlots(17, 21, 15)
        ];
    }
};

const Reservation = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const [error, setError] = useState('');
    const [isTimeSelectionOpen, setIsTimeSelectionOpen] = useState(false);

    const [timeSlots, setTimeSlots] = useState([]);

    const toggleDropdown = () => setIsTimeSelectionOpen(!isTimeSelectionOpen);

    const handleDateChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, date: value, 'time': '' });
        setError('');
        if (value) {
            setTimeSlots(getTimeSlotsForDate(value));
        }
    };

    // Function to be called on form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)

        if (!formData.time) {
            setError('Bitte wählen Sie eine Uhrzeit.');
            return;
        }        

        if (blockedReservations[formData.date]?.includes(formData.time)) {
            setError('Das Restaurant ist zu dieser Zeit vollständig ausgebucht. Bitte wählen Sie eine andere Uhrzeit.');
            return;
        }

        console.log('Form Submitted:', formData);

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, formData);
            // setStatus('Email sent successfully!');
        } catch (error) {
            // setStatus('Failed to send email.');
            console.error(error);
        }

        setFormData(defaultFormData);
        setTimeSlots([]);
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError('');
    };

    const handleTimeSelection = (name, value) => {
        if (blockedReservations[formData.date]?.includes(value)) {
            setError('Das Restaurant ist zu dieser Zeit vollständig ausgebucht. Bitte wählen Sie eine andere Uhrzeit.');
            return;
        }        
        setFormData({
            ...formData,
            [name]: value,
        });
        setError('');
        setIsTimeSelectionOpen(false);
    };

    return (
        <div className='reservation' id='reservation'>
            <div className="reservation-container">
                <div className="reservation-text">
                    <h1>Reservieren Sie Ihren Tisch für ein unvergessliches Essen</h1>
                    <p>Ob Sie nun die milden, duftenden Gerichte des Nordens oder die kräftigen, würzigen Aromen des Südens mögen, hier ist für jeden Gaumen etwas dabei. </p>
                    <p>Kommen Sie und erleben Sie das Herz Indiens auf Ihrem Teller im Taste of India!</p>
                </div>
                <div className="reservation-form">
                    <form onSubmit={handleSubmit} className='reservation-form-container'>
                        <div className="multi-fields">
                            <input className='reservation_input' type="text" name='firstName' value={formData.firstName} onChange={handleChange} placeholder='Vorname' />
                            <input className='reservation_input' type="text" name='lastName' value={formData.lastName} onChange={handleChange} placeholder='Name *' required/>
                        </div>
                        <input className='reservation_input' type="email" name='email' value={formData.email} onChange={handleChange} placeholder='Email Adresse *' required/>
                        <input className='reservation_input' type="text" name='phone' value={formData.phone} onChange={handleChange} placeholder='Telefon *'  required/>
                        <div className="multi-fields">
                            <input
                                className='reservation_input'
                                type="date"
                                name='date'
                                value={formData.date}
                                onChange={handleDateChange}
                                style={{ color: formData.date ? 'black' : 'gray' }}
                                required
                            />

                            <div className="reservation_input custom-dropdown" >
                                <button
                                    type="button"
                                    className="dropdown-button"
                                    onClick={toggleDropdown}
                                    style={{ color: formData.time ? 'black' : 'gray' }} 
                                >
                                    {formData.time || "Uhrzeit *"}
                                </button>
                                {isTimeSelectionOpen && (
                                    <ul className="dropdown-list">
                                        {timeSlots.map((time, index) => (
                                            <li
                                                key={index}
                                                className="dropdown-item"
                                                onClick={() => handleTimeSelection('time', time)}
                                            >
                                                {time}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="multi-fields">
                            <input className='reservation_input' type="text" name='nPeople' value={formData.nPeople} onChange={handleChange} placeholder='Anzahl Personen *' required />
                            <input className='reservation_input' type="text" name='occasion' value={formData.occasion} onChange={handleChange} placeholder='Anlass'/>
                        </div>                            


                        <textarea className='reservation-form-request' rows="5" type="text" name='specialRequest' value={formData.specialRequest} onChange={handleChange} placeholder='Bemerkungen' />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <input type="submit" className='reserve_button' value="Reservieren" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Reservation;
