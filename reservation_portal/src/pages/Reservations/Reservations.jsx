import React from 'react'
import './Reservations.css'
import { assets } from '../../assets/assets'

import { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(null);    

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setSelectedDate(today);
    }, []);

    useEffect(() => {
        if (!selectedDate) return;

        const formattedDate = selectedDate instanceof Date ? selectedDate.toISOString().split('T')[0] : selectedDate;
    
        const fetchReservations = async () => {
          setLoading(true);
          setFetchError(null);
          try {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/reservations?date=${formattedDate}`
            );
            const text = await response.text();
    
            try {
              const json = JSON.parse(text);
              setReservations(json);
            } catch (jsonError) {
              console.error('Failed to parse JSON:', jsonError);
              setFetchError('Invalid server response.');
            }
          } catch (networkError) {
            console.error('Fetch error:', networkError);
            setFetchError('Unable to fetch reservations.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchReservations();
      }, [selectedDate]);

    const handleCancelReservation = async (reservationId) => {
        if (!window.confirm("Bist du sicher, dass du diese Reservierung stornieren möchtest?")) return;
        
        try {
            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservations/${reservationId}`, {
            method: 'DELETE',
            });
        
            if (res.ok) {
            // Refresh the reservation list
            setReservations((prev) => prev.filter((r) => r.reservation_id !== reservationId));
            } else {
            console.error('Failed to delete reservation');
            }
        } catch (err) {
            console.error('Error deleting reservation:', err);
        }
    };
      

    return (
        <div>
            <div className='nav'>
                <div className="nav-container">
                    {/* <img src={assets.logo} alt="" className='logo' /> */}
                    <a href=""></a>
                    <a className='nav-menu nav-link'>Reservation Portal</a>
                </div>
            </div>
            <section className='bg-dashboard'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col1'>
                            <div className='rounded shadow'>
                                <div className='card'>
                                    <img className='img-profile-bg' src={assets.logo} alt="" />
                                </div>
                                <div className='avatar avatar-text'>
                                    <img src={assets.profile_pic} alt="" />
                                    <h5 className='name'> Inderjeet Singh Dhillon </h5>
                                    <p className='designation'> Admin/Owner </p>
                                </div>
                                <ul className='list-db'>
                                    <li className='item-db'>
                                        <a className='item-link-db'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="item-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"></path></svg>
                                            Reservations</a>
                                    </li>
                                    <li className='item-db'>
                                        <a className='item-link-db'>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="item-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM14.5946 18.8115C14.5327 18.5511 14.5 18.2794 14.5 18C14.5 17.7207 14.5327 17.449 14.5945 17.1886L13.6029 16.6161L14.6029 14.884L15.5952 15.4569C15.9883 15.0851 16.4676 14.8034 17 14.6449V13.5H19V14.6449C19.5324 14.8034 20.0116 15.0851 20.4047 15.4569L21.3971 14.8839L22.3972 16.616L21.4055 17.1885C21.4673 17.449 21.5 17.7207 21.5 18C21.5 18.2793 21.4673 18.551 21.4055 18.8114L22.3972 19.3839L21.3972 21.116L20.4048 20.543C20.0117 20.9149 19.5325 21.1966 19.0001 21.355V22.5H17.0001V21.3551C16.4677 21.1967 15.9884 20.915 15.5953 20.5431L14.603 21.1161L13.6029 19.384L14.5946 18.8115ZM18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"></path></svg>
                                            Profile Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col2-1">
                            <div className="col2-header">
                                <div className="col2-header-text">
                                    <h5>Reservations</h5>
                                </div>
                                <div className="col2-header-form">
                                    <div className="col2-header-form-2">
                                        <form>
                                            <div className="col2-header-form-select-1">
                                                <div className="col2-header-form-select-2">
                                                    <div className="col2-header-form-select-3">
                                                        <DatePicker className="col2-header-form-select-4" 
                                                                selected={selectedDate} 
                                                                onChange={(date) => setSelectedDate(date)}
                                                                dateFormat="eeee, dd. MMMM yyyy"
                                                                locale={de}
                                                                />
                                                    </div>
                                                </div>
                                                <div className="col2-header-button-1">
                                                    <div className="col2-header-button-2">
                                                    <a className="col2-header-button-a" href="https://tasteofindia-grossenhain.de/#reservation"
                                                        target="_blank" rel="noopener noreferrer">
                                                            Reservieren
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="table-container-1">
                                <div className="table-container-2">
                                    <div className="table-container-3">
                                    {loading ? (
                                        <p>Loading reservations...</p>
                                    ) : fetchError ? (
                                        <p className="error">{fetchError}</p>
                                    ) : (                                        
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="table-head-th" style={{ minWidth: '50px' }}>#</th>
                                                    <th className="table-head-th" style={{ minWidth: '150px' }}>First name</th>
                                                    <th className="table-head-th" style={{ minWidth: '150px' }}>Last name</th>
                                                    <th className="table-head-th" style={{ minWidth: '120px' }}>Date</th>
                                                    <th className="table-head-th">Time</th>
                                                    <th className="table-head-th">Persons</th>
                                                    <th className="table-head-th" style={{ minWidth: '180px' }}>Special requests</th>
                                                    <th className="table-head-th"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reservations.map((res, index) => {
                                                    const formattedDate = new Date(res.reservation_date).toLocaleDateString('de-DE', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                    });
                                                    return (<tr key={res.reservation_id}>
                                                        <td className="table-body-td">{index + 1}</td>
                                                        <td className="table-body-td">{res.first_name}</td>
                                                        <td className="table-body-td">{res.last_name}</td>
                                                        <td className="table-body-td">{formattedDate}</td>
                                                        <td className="table-body-td">{res.reservation_time.slice(0, 5)}</td>
                                                        <td className="table-body-td">{res.party_size}</td>
                                                        <td className="table-body-td">{res.special_requests || '—'}</td>
                                                        <td className='table-body-td'> 
                                                            <button className="cancel-button" onClick={() => handleCancelReservation(res.reservation_id)}>
                                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"></path></svg>
                                                            </button>
                                                        </td>
                                                    </tr>);
                                                })}
                                            </tbody>
                                        </table>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Reservations