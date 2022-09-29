import React from 'react'

type Props = {
  children: React.ReactNode
}

const SeeMore = ({ children }: Props) => {
  return (
    <p className='text-black font-bold italic underline text-large text-right mt-2'>
      {children}
    </p>
  )
}

export default SeeMore
