import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import './App.css'
import Media from './pages/Media'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='pt-14'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/media' element={<Media />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
