import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import Menu from '../../components/Menu/Menu'
import MenuCategory from '../../components/Menu/MenuCategory/MenuCategory'
import MenuList from '../../components/Menu/MenuList/MenuList'
import Reservation from '../../components/Reservation/Reservation'
import Footer from '../../components/Footer/Footer'
import MittagsangebotPopup from '../Popups/LunchOffer'

const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <MittagsangebotPopup/>
        <Header/>
        <About/>
        <Features/>
        <Menu/>
        {/* <MenuCategory/>
        <MenuList/> */}
        <Reservation/>
        <Footer/>
    </div>
  )
}

export default Home