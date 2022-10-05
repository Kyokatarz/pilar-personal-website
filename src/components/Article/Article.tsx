import React from 'react'

type Props = {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return <article className='max-w-xl w-full'>{children}</article>
}

export default Section
