import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import FullMenu from './pages/FullMenu/FullMenu'

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/speisekarte' element={<FullMenu/>}></Route>
      </Routes>
    </div>
  )
}

export default App