import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-14 fixed bg-white drop-shadow-md'>
      <ul className='h-full flex flex-row gap-x-16 justify-end px-6 items-center'>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
