import React from 'react'

type Props = {
  children: React.ReactNode
}

const Paragraph = ({ children }: Props) => {
  return <p className='text-justify'>{children}</p>
}

export default Paragraph
