import React from 'react'
import TheUgly from '../Landing/assets/la-mujer-oro.jpeg'

const Landing = () => {
  return (
    <section className='h-[calc(100vh-theme(spacing.14))] w-full pt-20 px-2 flex items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col items-center xl:flex-row xl:justify-evenly'>
        <div className='flex items-center justify-center'>
          <img src={TheUgly} alt='' className='max-w-sm w-auto h-full' />
        </div>
        <article>
          <header className='text-4xl text-red-900 mb-2'>PILAR MIRALLES</header>
          <p className='max-w-xl text-justify'>
            Nisi excepteur esse laborum aute nostrud et duis proident. Ea ea ut
            adipisicing nulla nulla non quis. Non id in irure quis minim nisi
            veniam sit Lorem excepteur ex pariatur. Nostrud non qui qui
            consequat labore. Anim dolore ea irure aute incididunt ea amet sunt
            adipisicing esse deserunt aliqua. Velit quis incididunt eu tempor
            dolor veniam excepteur do proident nulla nisi laboris. Pariatur amet
            dolore culpa consequat. Esse amet fugiat laborum ex fugiat mollit.
            Incididunt irure mollit dolor dolor eiusmod do Lorem exercitation
            magna labore. Dolore culpa aute dolore commodo mollit dolore
            adipisicing laborum non laboris veniam voluptate ea. Dolore nisi et
            amet aute esse dolore ex dolor consectetur duis cupidatat. Et non
            nulla quis reprehenderit duis consequat enim pariatur. Sit veniam
            laboris Lorem voluptate dolor exercitation tempor laborum proident.
            Duis reprehenderit occaecat duis ad. Ipsum Lorem reprehenderit
            cillum nisi eiusmod sint officia proident sint nostrud voluptate.
            Cillum consectetur irure aute enim cillum exercitation amet duis ad.
            Sunt dolor sunt laboris sit et ea laborum velit deserunt proident.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Landing
