import React from 'react'

type Props = {
  children: React.ReactNode
}

const SeeMore = ({ children }: Props) => {
  return (
    <p className='text-black font-semibold italic underline text-large text-right mt-2'>
      {children}
    </p>
  )
}

export default SeeMore
