import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Reservations from './pages/Reservations/Reservations'

const App = () => {    
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Reservations/>}></Route>
      </Routes>
    </div>
  )
}

export default App