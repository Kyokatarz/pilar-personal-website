import React from 'react'

import icon from './assets/icon.svg'
import DesktopNavLinks from './components/DesktopNavLinks'
import MobileNavLinks from './components/MobileNavLinks'

const Navbar = () => {
  return (
    <nav className='w-full h-14 fixed flex flex-row items-center justify-between bg-white drop-shadow-md border-b-2 border-black'>
      <a href='/#landing-introduction'>
        <img src={icon} alt='To home page icon' className='ml-4' />
      </a>
      <DesktopNavLinks />
      <MobileNavLinks />
    </nav>
  )
}

export default Navbar
