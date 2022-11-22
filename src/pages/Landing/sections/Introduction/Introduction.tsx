import React from 'react'
import Article from '../../../../components/Article'
import Paragraph from '../../../../components/Paragraph'
import Section from '../../../../components/Section'
import SubSectionHeader from '../../../../components/SubSectionHeader'

import TheUgly from '../../assets/la-mujer-oro.jpeg'

const Introduction = () => {
  return (
    <Section id='landing-introduction'>
      <div className='flex items-center justify-center mb-6 max-w-sm flex-col'>
        <img src={TheUgly} alt='' className='max-w-full w-auto' />
        <figcaption className='w-full text-right text-xs italic'>
          © Jonas Šopa
        </figcaption>
      </div>
      <Article>
        <header>
          <h1 className='text-4xl text-black mb-6 '>
            <span>PILAR MIRALLES</span> <br />
            <span className='text-2xl italic text-gray-600'>
              composer / sound artist / writer
            </span>
          </h1>
        </header>

        <SubSectionHeader level={2}>Statement</SubSectionHeader>
        <Paragraph>
          I would like to question our approach to artistic expression up to
          this day, our capacity of perceiving and interpreting the world and
          the self, and our subsequent consciousness and freedom. I dream about
          and work for a new way of creation, interpretation and reception of
          art within an environment free of economic constraints, academic
          technocracy and administrative deception.
          <br />
          <br />
          <span className='italic'>
            Art is a human condition, a condition for being humane, a condition
            for human dignity. I feel the eagerness to exist through artistic
            creation and feeling. I want to express all I can, life, existence,
            the world and its beautiful decrepitude, oozing art every second,
            and whatever escapes from its unconsciousness.
          </span>
          <br />
          <br />
          Besides music and sound art, I am exploring visual arts, and
          literature. I am currently expanding my knowledge in philosophy,
          sociology, pedagogy and history of the arts, focusing on posing
          questions such as:
          <br />
          <br />
          <span className='italic'>
            What is happening to art? What is happening to the world? What is
            happening to us? Is art as a condition for human dignity falling
            into disuse?
          </span>
          <br />
          <br />
        </Paragraph>

        <SubSectionHeader level={2}>Acknowledgements</SubSectionHeader>
        <Paragraph>
          Thanks to Jean-Paul Sartre for <span className='italic'>Nausea</span>,
          John Kennedy Toole for{' '}
          <span className='italic'>A Confederacy of Dunces</span>, and John
          Steinbeck for <span className='italic'>The Grapes of Wrath</span>.
          <br />
          <br />
          Thanks to Galina Ustvolskaya, the truest composer, and to Éliane
          Radigue for defying the immediacy era.
          <br />
          <br />
          Thanks to Paulo Freire and his{' '}
          <span className='italic'>Pedagogy of the Oppressed</span>.
          <br />
          <br />
          Thanks to Mayakovsky{' '}
          <span className='italic'>
            …the boat of love crashed into everyday life…
          </span>{' '}
          (last letter, 1930).
          <br />
          <br />
          Thanks to all artists who feel and felt the oppression that is usually
          applied to those who express the freedom of their consciousness.
        </Paragraph>
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
          <span className='not-italic'>😎</span>.
        </p>
      </Article>
    </Section>
  )
}

export default Introduction
