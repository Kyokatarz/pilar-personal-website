import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({ isOpen, setIsOpen }: Props) => {
  const open = isOpen ? 'translate-x-0' : 'translate-x-full'
  // Create nav bar drawer
  return (
    <div
      className={`bg-white h-screen w-64 fixed top-0 right-0 z-40 shadow transition-transform ${open}`}
    >
      <ul className='flex flex-col mt-14 items-center h-full'>
        <a
          href='/#landing-introduction'
          onClick={() => setIsOpen(false)}
          className='w-full'
        >
          <div className='border-b border-gray-200 w-full h-10 flex justify-center items-center'>
            <li>Home</li>
          </div>
        </a>
        <Link
          to='/about-me'
          onClick={() => setIsOpen(false)}
          className='w-full'
        >
          <div className='border-b border-gray-200 w-full h-10 flex justify-center items-center'>
            <li>About me</li>
          </div>
        </Link>
        <Link to='/media' onClick={() => setIsOpen(false)} className='w-full'>
          <div className='border-b border-gray-200 w-full h-10 flex justify-center items-center'>
            <li>Media</li>
          </div>
        </Link>

        {/* Using <a> tag to prevent scrolling to top */}
        <Link
          to='/contact-me'
          onClick={() => setIsOpen(false)}
          className='w-full'
        >
          <div className='border-b border-gray-200 w-full h-10 flex justify-center items-center'>
            <li>Contact</li>
          </div>
        </Link>
      </ul>
    </div>
  )
}

export default Drawer
