import React from 'react'
import TheUgly from '../Landing/assets/la-mujer-oro.jpeg'

const Landing = () => {
  return (
    <section className='h-auto w-full pt-10 pb-10 px-2 flex items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col items-center  xl:justify-evenly'>
        <div className='flex items-center justify-center mb-6'>
          <img src={TheUgly} alt='' className='max-w-sm w-auto h-full' />
        </div>
        <article>
          <header className='text-4xl text-black mb-2'>
            PILAR MIRALLES
            <p className='text-2xl italic text-gray-600'>
              (Composer / sound artist)
            </p>
          </header>
          <p className='max-w-xl text-justify'>
            <span className='underline bold font-bold'>Statement</span>
            <br />
            I would like to question our approach to artistic expression up to
            this day, our capacity of perceiving the world and the self, and our
            subsequent consciousness and freedom. I dream about and work for a
            new way of creation, interpretation and reception of art within an
            environment free of economic constrains, academic technocracy and
            administrative deception.
            <br />
            <br />
            Art is a human condition, a condition for being humane, a condition
            for human dignity. I feel the eagerness to exist through artistic
            creation and feeling. I want to express all I can, life, existence,
            the world and its beautiful decrepitude, oozing art every second,
            and whatever escapes from its unconsciousness.
            <br />
            <br />
            Besides music and sound art, I am interested in visual arts,
            contemporary dance and literature. I am currently expanding my
            knowledge in philosophy, sociology, pedagogy and history, focusing
            on artistic expression.
            <br />
            <br />
            What is happening to art? What is happening to the world? What is
            happening to us? Is the art as a condition for human dignity falling
            into disuse?
            <br />
            <br />
          </p>
          <p className='max-w-xl text-justify'>
            <span className='underline font-bold'>Acknowledgements</span>
            <br />
            Thanks to Jean-Paul Sartre for Nausea, John Kennedy Toole for A
            Confederacy of Dunces, and John Steinbeck for The Grapes of Wrath
            <br />
            <br />
            Thanks to Galina Ustvolskaya, the truest composer, and to Alexandre
            Tansman for his Sonatina for Bassoon and Piano
            <br />
            <br />
            Thanks to Paulo Freire and his Pedagogy of the Opressed
            <br />
            <br />
            Thanks to Mayakovsky …the boat of love crashed into everyday life…
            (1930, Last letter)
            <br />
            <br />
            Thanks to all artists who felt the oppression that is usually
            applied to those express the freedom of their consciousness
          </p>
          <br />
          <p className='max-w-xl text-justify'>
            This website has been kindly designed and developed by Giang Tran{' '}
            <a
              href='https://fi.linkedin.com/in/giang-tran97'
              target='_blank'
              rel='noreferrer'
              className='text-blue-500'
            >
              https://fi.linkedin.com/in/giang-tran97 😎{' '}
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}

export default Landing
