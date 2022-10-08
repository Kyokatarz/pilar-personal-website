import React from 'react'

type Props = {
  children: React.ReactNode
  maxWidth?: string
}

const Section = ({ children, maxWidth = 'max-w-6xl' }: Props) => {
  return (
    <section className='h-auto min-h-screen w-full pt-10 pb-10 px-4 flex items-center justify-center'>
      <div
        className={`${maxWidth} w-full flex flex-col items-center xl:justify-evenly`}
      >
        {children}
      </div>
    </section>
  )
}

export default Section
