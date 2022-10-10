import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Landing from './pages/Landing'
import Media from './pages/Media'
import FullAbout from './pages/FullAbout'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'

import './App.css'
import ContactMeFull from './pages/ContactMeFull'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop />˝
      <main className='pt-14'>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/media' element={<Media />} />
          <Route path='/about-me' element={<FullAbout />} />
          <Route path='/contact-me' element={<ContactMeFull />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
