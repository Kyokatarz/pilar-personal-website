import React from 'react'
import Article from '../../../../components/Article'
import Paragraph from '../../../../components/Paragraph'
import Section from '../../../../components/Section'
import SubSectionHeader from '../../../../components/SubSectionHeader'

import TheUgly from '../../assets/foto-horizontal.jpg'

const Introduction = () => {
  return (
    <Section id='landing-introduction'>
      <div className='flex items-center justify-center mb-6 max-w-sm flex-col'>
        <img src={TheUgly} alt='' className='max-w-full w-auto' />
      </div>
      <Article>
        <header>
          <h1 className='text-4xl text-black mb-6 '>
            <span>PILAR MIRALLES</span> <br />
            <span className='text-2xl italic text-gray-600'>
              composer / sound artist
            </span>
          </h1>
        </header>

        <SubSectionHeader id='statement' level={2}>
          Artist statement
        </SubSectionHeader>
        <Paragraph>
          I would like to question our approach to artistic expression in the
          mass-market era, our capacity to perceive and interpret the world and
          the self, and our subsequent consciousness and freedom. I dream about
          and work for a new way of creation, interpretation and reception of
          art within an environment free of market domination, academic
          technocracy and administrative deception.
          <br />
          <br />
          My work as an artist is focused on the problematization of time,
          mostly through sound, as a social tool. I intend to create situations
          of sonic "underload" where the listener can linger over reflection and
          contemplation. I believe in quietness to overcome the excess of
          information, fragmentation of the present, and immediacy of
          production, consumption and optimization of today's everyday life. I
          train myself{' '}
          <em>
            to look better in order to see, to listen better in order to hear
          </em>{' '}
          (Éliane Radigue, "The Mysterious Power of the Infinitesimal"): the
          biggest step of my journey as an artist was to become conscious that I
          am not conscious.
          <br />
          <br />
          I intend to understand and exist in the present through artistic
          creation, focusing on finding a solid ground, presence and intention
          for my creative necessities. I hope to create opportunities to
          encounter continuity, depth and meaning in this hectic world for me
          and others.
          <br />
          <br />
          <em>
            More and more I have the feeling that we are getting nowhere.
            Slowly, as the talk goes on, we are getting nowhere and that is a
            pleasure… Originally, we were nowhere; and now, again, we are having
            the pleasure of being slowly nowhere. If anybody is sleepy, let him
            go to sleep{' '}
          </em>{' '}
          (John Cage, "Lecture on Nothing").
          <br />
          <br />I commit myself to <em>quieten time</em> and{' '}
          <em>linger over sound</em>.
          <br />
          <br />
          <br />
        </Paragraph>

        <SubSectionHeader level={2}>Acknowledgments</SubSectionHeader>
        <Paragraph>
          Thanks to Jean-Paul Sartre for <span className='italic'>Nausea</span>,
          John Kennedy Toole for{' '}
          <span className='italic'>A Confederacy of Dunces</span>, and John
          Steinbeck for <span className='italic'>The Grapes of Wrath</span>.
          <br />
          <br />
          Thanks to Galina Ustvolskaya, the truest composer, and to Éliane
          Radigue, Eva-Maria Houben and Jakob Ullmann for defying the immediacy
          era.
          <br />
          <br />
          Thanks to Dada (
          <em>
            dada m'dada, dada m'dada dada mhm, dada dera dada, dada Hue, dada
            Tza
          </em>
          ). Thanks to Fluxus.
          <br />
          <br />
          Thanks to Mayakovsky{' '}
          <span className='italic'>
            …the boat of love crashed into everyday life…
          </span>{' '}
          (last letter, 1930).
          <br />
          <br />
          Thanks to all artists who feel or have felt the oppression that is
          normally exerted on those who express the freedom of their
          consciousness.
        </Paragraph>
        <br />
        <br />
        <p className={'italic text-left'}>
          This open-source website has been kindly designed and developed by{' '}
          <a
            href='https://fi.linkedin.com/in/giang-tran97'
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            Giang Tran{' '}
          </a>
          <span className='not-italic'>😎</span>. Still a work in progress!
        </p>
      </Article>
    </Section>
  )
}

export default Introduction
