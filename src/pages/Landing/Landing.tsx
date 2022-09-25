import clsx from 'clsx'
import React from 'react'
import TheUgly from '../Landing/assets/la-mujer-oro.jpeg'

const Landing = () => {
  const paragraphClasses = 'text-justify'
  const paragraphHeaderClasses = 'underline font-bold'
  return (
    <section className='h-auto w-full pt-10 pb-10 px-4 flex items-center justify-center'>
      <div className='max-w-6xl w-full flex flex-col items-center xl:justify-evenly'>
        <div className='flex items-center justify-center mb-6 max-w-sm'>
          <img src={TheUgly} alt='' className='max-w-full w-auto' />
        </div>
        <article className='max-w-xl'>
          <header className='text-4xl text-black mb-2'>
            PILAR MIRALLES
            <p className='text-2xl italic text-gray-600'>
              (Composer / sound artist)
            </p>
          </header>
          <p className={paragraphClasses}>
            <span className={paragraphHeaderClasses}>Statement</span>
            <br />
            I would like to question our approach to artistic expression up to
            this day, our capacity of perceiving and interpreting the world and
            the self, and our subsequent consciousness and freedom. I dream
            about and work for a new way of creation, interpretation and
            reception of art within an environment free of economic constraints,
            academic technocracy and administrative deception.
            <br />
            <br />
            <span className='italic'>
              Art is a human condition, a condition for being humane, a
              condition for human dignity. I feel the eagerness to exist through
              artistic creation and feeling. I want to express all I can, life,
              existence, the world and its beautiful decrepitude, oozing art
              every second, and whatever escapes from its unconsciousness.
            </span>
            <br />
            <br />
            Besides music and sound art, I am interested in visual arts,
            contemporary dance and literature. I am currently expanding my
            knowledge in philosophy, sociology, pedagogy and history, focusing
            on posing and answering questions such as
            <br />
            <br />
            <span className='italic'>
              What is happening to art? What is happening to the world? What is
              happening to us? Is art as a condition for human dignity falling
              into disuse?
            </span>
            <br />
            <br />
          </p>
          <p className={paragraphClasses}>
            <span className={paragraphHeaderClasses}>Acknowledgements</span>
            <br />
            Thanks to Jean-Paul Sartre for{' '}
            <span className='italic'>Nausea</span>, John Kennedy Toole for{' '}
            <span className='italic'>A Confederacy of Dunces</span>, and John
            Steinbeck for
            <span className='italic'>The Grapes of Wrath</span>
            <br />
            <br />
            Thanks to Galina Ustvolskaya, the truest composer, and to Alexandre
            Tansman for his Sonatina for Bassoon and Piano
            <br />
            <br />
            Thanks to Paulo Freire and his{' '}
            <span className='italic'>Pedagogy of the Oppressed</span>
            <br />
            <br />
            Thanks to Mayakovsky{' '}
            <span className='italic'>
              …the boat of love crashed into everyday life…
            </span>{' '}
            (last letter, 1930)
            <br />
            <br />
            Thanks to all artists who feel and felt the oppression that is
            usually applied to those who express the freedom of their
            consciousness
          </p>
          <br />
          <p className={'italic text-left'}>
            This website has been kindly designed and developed by{' '}
            <a
              href='https://fi.linkedin.com/in/giang-tran97'
              target='_blank'
              rel='noreferrer'
              className='text-blue-500'
            >
              Giang Tran{' '}
            </a>
            <span className='not-italic'>😎</span>
          </p>
        </article>
      </div>
    </section>
  )
}

export default Landing
