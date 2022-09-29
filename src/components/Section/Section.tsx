import React from 'react'

type Props = {
  children: React.ReactNode
}

const Section = ({ children }: Props) => {
  return (
    <section className='h-auto w-full pt-10 pb-10 px-4 flex items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col items-center xl:justify-evenly'>
        {children}
      </div>
    </section>
  )
}

export default Section
