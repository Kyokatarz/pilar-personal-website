import React from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Hamburger = ({ isOpen, setIsOpen }: Props) => {
  const topRotate = isOpen ? 'rotate-45 absolute left-0 top-1' : ''
  const middleOpacity = isOpen ? 'opacity-0' : ''
  const bottomRotate = isOpen ? '-rotate-45  absolute left-0' : ''

  return (
    <div
      className='relative flex flex-col justify-center items-center cursor-pointer z-50'
      tabIndex={0}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={`h-1 w-6 bg-black transition-transform ${topRotate} `} />
      <div
        className={`h-1 w-6 bg-black mt-1 transition-transform ${middleOpacity}`}
      />
      <div
        className={`h-1 w-6 bg-black mt-1 transition-transform ${bottomRotate}`}
      />
    </div>
  )
}

export default Hamburger
