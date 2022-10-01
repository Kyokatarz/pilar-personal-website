import React from 'react'

type Props = {
  children: React.ReactNode
  to?: string
  target?: '_blank'
}

const SeeMore = ({ children, to, target }: Props) => {
  return (
    <div className='w-full flex justify-end'>
      <a
        href={to || '#'}
        className='text-black font-semibold italic underline text-large text-right mt-2 w-full'
        target={target || '_self'}
      >
        {children}
      </a>
    </div>
  )
}

export default SeeMore
