import React from 'react'
import ListItem from '../../components/ListItem'

import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import SeeMore from '../../components/SeeMore'
import SubSectionHeader from '../../components/SubSectionHeader'

import PilarWorking from './assets/pilar-working.jpg'

const FullAbout = () => {
  return (
    <Section maxWidth='max-w-screen-sm lg:max-w-screen-xl'>
      <h1 className='text-4xl font-bold text-center mb-6'>About me</h1>
      <div className='justify-center items-center w-full flex flex-col lg:items-start lg:flex-row lg:flex-wrap lg:justify-center'>
        <div className='max-w-lg lg:mr-10 mb-8 lg:w-4/12'>
          <img src={PilarWorking} alt='Pilar working' />
          <figcaption className='w-full text-right text-xs italic'>
            © Jonas Šopa
          </figcaption>
          <div className='mt-24 w-full text-left border-black border-4 p-4 hidden lg:block'>
            <Paragraph>
              I use SuperCollider programming language for composing my
              electroacoustic works. You can check out my{' '}
              <a
                href='https://github.com/pilarmiralles'
                target='_blank'
                rel='noreferrer'
                className='text-blue-500'
              >
                GitHub
              </a>{' '}
              for some SuperCollider tutorials and other specific codes I am
              developing.
            </Paragraph>
          </div>
        </div>
        <div className='lg:w-5/12'>
          <Paragraph>
            Hi! My name is Pilar Miralles and I was born in Almería (Spain) in
            1997. I am a composer and sound artist based in Helsinki (Finland).
            I speak Spanish, English and a bit of French. You can find my artist
            statement and short bio in the home page.
          </Paragraph>
          <br />
          <SubSectionHeader level={2}>Education</SubSectionHeader>
          <ul className='text-justify'>
            <ListItem>
              Preparatory doctoral student at the DocMus Doctoral School of the
              Sibelius Academy, University of the Arts Helsinki (Finland,
              ongoing)
            </ListItem>
            <ListItem>
              Master of Music in Composition at the Sibelius Academy, University
              of the Arts Helsinki (Finland, 2022)
            </ListItem>
            <ul>
              <ListItem level={2} listStyle='list-square'>
                Published{' '}
                <a
                  href='https://taju.uniarts.fi/handle/10024/7647'
                  target='_blank'
                  rel='noreferrer'
                  className='text-blue-500'
                >
                  Master thesis
                </a>{' '}
                "Galina Ustvolskaya’s 'True and Eternal Bliss': spiritual
                creativity in the Soviet Union"
              </ListItem>
            </ul>
            <ListItem>
              Master’s Degree in Electroacoustic Composition at the Higher
              Center of Musical Education “Katarina Gurska” of Madrid (Spain,
              2020)
            </ListItem>
            <ListItem>
              Bachelor’s Degree in Composition at the Royal Higher Conservatory
              of Music “Victoria Eugenia” of Granada (Spain, 2019)
            </ListItem>
          </ul>
          <br />
          <SubSectionHeader level={2}>
            Current research project
          </SubSectionHeader>
          <ul className='text-justify'>
            <Paragraph>
              My current artistic research project is called: "A Space in Time;
              Compositional Solutions for the Creation of Sonic Spaces as a
              Social Instrument". My main research question is the sonic space
              as a hypothetical resource to bring about a series of favorable
              conditions for the listener to question their perception. The
              sonic space is described as a space in time, or a time where one
              can stay. Through the analysis of referential pieces and my own
              experimentation through the artistic component of my project, I
              intend to develop a series of compositional solutions for the
              creation of this space in time, preliminary related to the
              concepts of moment, vertical time, non-teleology and
              micro-variation.
            </Paragraph>
          </ul>
          <br />
          <SubSectionHeader level={2}>
            Some more biographical stuff
          </SubSectionHeader>
          <Paragraph>
            <ul>
              I have attended composition masterclasses with Liza Lim, Augusta
              Read Thomas, Kalevi Aho and Guillaume Connesson, among others, and
              I received a merit grant from the Martin Wegelius Foundation in
              2022. My instrumental work has been internationally premiered by
              ensembles and orchestras, such as the Île-de-France National
              Orchestra, the Helsinki Symphony Orchestra, the Orchester im
              Treppenhaus, Defunensemble, Vertixe Sonora, K!ART Ensemble or
              Zagros Ensemble. On the other hand, her electroacoustic work has
              been developed at the Nordplus intensive course IMMEDIA 2021 in
              Vilnius (Lithuania), the MuteFest ’20 and ’22 (Festival of Musical
              Creation with Technology) at the Sibelius Academy (Finland), or
              the FACBA Festival of Contemporary Art of Granada’s University
              2021 (Spain), the latter one in collaboration with composer and
              researcher José López-Montes, with whom I co-composed a
              computer-generated piece in podcast format by using his
              computer-aided creativity tool GenoMus. I have participated in
              other important new music festivals in Europe such as Musiikin
              aika (Time of Music) 2023 in Viitasaari (Finland), the Academy of
              ManiFeste 2022 at the IRCAM in Paris (France), or the VANG series
              of CentroCentro in Madrid (Spain). I have also collaborated as a
              co-teacher of the SuperCollider programming course organized by
              the Music Technology department of the Sibelius Academy in May
              2023. During 2023, I have been invited by the Ulysses Network to
              join the Ulysses Journeys for young composers with stops at the
              Musiikin aika Festival in Viitasaari (Finland) and the akademie
              kontemporär in Hamburg (Germany). I am also currently working on a
              text-based work (the so-called book), and sometimes I dust off my
              flute and my collage notebook.
            </ul>
          </Paragraph>
          <Paragraph>
            <div className='mt-10 mb-10 w-full text-left border-black border-4 p-4 lg:hidden'>
              <Paragraph>
                I use SuperCollider programming language for composing my
                electroacoustic works. You can check out my{' '}
                <a
                  href='https://github.com/pilarmiralles'
                  target='_blank'
                  rel='noreferrer'
                  className='text-blue-500'
                >
                  GitHub
                </a>{' '}
                for some SuperCollider tutorials and other specific codes I am
                developing.
              </Paragraph>
            </div>
            <SeeMore to='/media'>See more media {'>>'}</SeeMore>
            <SeeMore to='/contact-me'>Contact me {'>>'}</SeeMore>
          </Paragraph>
        </div>
      </div>
    </Section>
  )
}

export default FullAbout
