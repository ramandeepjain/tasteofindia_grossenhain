import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import FullMenu from './pages/FullMenu/FullMenu'
import Datenschutz from './pages/Datenschutz/Datenschutz'
import Impressium from './pages/Impressium/Impressium'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/speisekarte' element={<FullMenu/>}></Route>
        <Route path='/datenschutz' element={<Datenschutz/>}></Route>
        <Route path='/impressium' element={<Impressium/>}></Route>
      </Routes>
    </div>
  )
}

export default App