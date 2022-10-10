import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const MobileNavLinks = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <ul className='gap-x-16 justify-end px-6 items-center'>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </ul>
  )
}

export default MobileNavLinks
