import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Media from './pages/Media'
import FullAbout from './pages/FullAbout'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop />˝
      <main className='pt-14'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/media' element={<Media />} />
          <Route path='about-me' element={<FullAbout />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
