import React from 'react'
import { Link } from 'react-router-dom'

import icon from './assets/icon.png'

const Navbar = () => {
  return (
    <nav className='w-full h-14 fixed flex flex-row items-center justify-between bg-white drop-shadow-md'>
      <a href='/#landing-introduction'>
        <img src={icon} alt='To home page icon' className='ml-4' />
      </a>
      <ul className='h-full flex flex-row gap-x-16 justify-end px-6 items-center'>
        <a href='/#landing-introduction'>
          <li>Home</li>
        </a>
        <Link to='/about-me'>
          <li>About me</li>
        </Link>
        <Link to='/media'>
          <li>Media</li>
        </Link>

        {/* Using <a> tag to prevent scrolling to top */}
        <a href='/#contact'>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
