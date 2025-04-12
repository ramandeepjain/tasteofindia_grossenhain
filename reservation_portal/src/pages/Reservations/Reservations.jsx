import React from 'react'
import './Reservations.css'
import { assets } from '../../assets/assets'

import { useEffect, useState } from 'react';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservations`)
            .then(async (res) => {
                const text = await res.text(); // Get raw response as text
                // console.log('Raw response:', text);
                try {
                    const json = JSON.parse(text);
                    setReservations(json);
                } catch (err) {
                    console.error('Failed to parse JSON:', err);
                }
            })
            .catch((err) => console.error('Fetch error:', err));
    }, []);

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
                                    <h5>Appointment</h5>
                                </div>
                                <div className="col2-header-form">
                                    <div className="col2-header-form-2">
                                        <form>
                                            <div className="col2-header-form-select-1">
                                                <div className="col2-header-form-select-2">
                                                    <div className="col2-header-form-select-3">
                                                        <select className="col2-header-form-select-4">
                                                            <option value="EY" defaultValue="selected">Today</option>
                                                            <option value="GY">Tomorrow</option>
                                                            <option value="PS">Yesterday</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col2-header-button-1">
                                                    <div className="col2-header-button-2">
                                                        <a className="col2-header-button-a" href="">
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
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="table-head-th" style={{ minWidth: '50px' }}>#</th>
                                                    <th className="table-head-th" style={{ minWidth: '180px' }}>First name</th>
                                                    <th className="table-head-th" style={{ minWidth: '180px' }}>Last name</th>
                                                    <th className="table-head-th" style={{ minWidth: '150px' }}>Date</th>
                                                    <th className="table-head-th">Time</th>
                                                    <th className="table-head-th">Persons</th>
                                                    <th className="table-head-th" style={{ minWidth: '220px' }}>Special requests</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reservations.map((res, index) => {
                                                    const formattedDate = new Date(res.reservation_date).toLocaleDateString('de-DE', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        year: 'numeric',
                                                    });
                                                    return (<tr key={`${res.reservation_date}-${res.reservation_time}-${res.first_name}-${res.last_name}-${index}`}>
                                                        <td className="table-body-td">{index + 1}</td>
                                                        <td className="table-body-td">{res.first_name}</td>
                                                        <td className="table-body-td">{res.last_name}</td>
                                                        <td className="table-body-td">{formattedDate}</td>
                                                        <td className="table-body-td">{res.reservation_time}</td>
                                                        <td className="table-body-td">{res.party_size}</td>
                                                        <td className="table-body-td">{res.special_request || '—'}</td>
                                                    </tr>);
                                                })}
                                            </tbody>
                                        </table>
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