import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ShopNavbar from './components/ShopNavbar/ShopNavbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import FullMenu from './pages/FullMenu/FullMenu'
import Datenschutz from './pages/Datenschutz/Datenschutz'
import Impressium from './pages/Impressium/Impressium'
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop' || location.pathname === '/cart';

  return (
    <div className='app'>
      {isShopPage ? <ShopNavbar /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/speisekarte' element={<FullMenu/>}></Route>
        <Route path='/datenschutz' element={<Datenschutz/>}></Route>
        <Route path='/impressium' element={<Impressium/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/order' element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
  )
}

export default App