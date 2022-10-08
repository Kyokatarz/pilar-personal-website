import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  to: string
  target?: '_blank' | '_self'
  external?: boolean
}

const SeeMore = ({ children, to, target, external }: Props) => {
  target = target || '_self'

  const redirectComponent = external ? (
    <a href={to} target={target} rel='noreferrer'>
      {children}
    </a>
  ) : (
    <Link to={to} target={target}>
      {children}
    </Link>
  )

  return (
    <div className='w-full flex justify-end text-black font-semibold italic underline text-large text-right mt-2'>
      {redirectComponent}
    </div>
  )
}

export default SeeMore
