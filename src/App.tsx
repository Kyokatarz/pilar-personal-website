import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Landing from './pages/Landing'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='pt-14'>
        <Landing />
      </main>
    </div>
  )
}

export default App
