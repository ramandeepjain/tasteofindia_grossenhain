import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import About from '../../components/About/About'
import Features from '../../components/Features/Features'
import MenuCategory from '../../components/MenuCategory/MenuCategory'
import Menu from '../../components/Menu/Menu'
import Reservation from '../../components/Reservation/Reservation'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Features/>
        <MenuCategory/>
        <Menu/>
        <Reservation/>
        <Footer/>
    </div>
  )
}

export default Home