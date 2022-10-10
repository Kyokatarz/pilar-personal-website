import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNavLinks = () => {
  return (
    <ul className='hidden md:flex h-full flex-row gap-x-16 justify-end px-6 items-center'>
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
  )
}

export default DesktopNavLinks
