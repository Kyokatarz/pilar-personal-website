import React from 'react'

import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import SeeMore from '../../components/SeeMore'
import SubSectionHeader from '../../components/SubSectionHeader'

import PilarWorking from './assets/pilar-working.jpg'

const FullAbout = () => {
  return (
    <Section maxWidth='max-w-screen-sm lg:max-w-screen-xl'>
      <h1 className='text-4xl font-bold text-center mb-6'>About Me</h1>
      <div className='justify-center items-center w-full flex flex-col lg:items-start lg:flex-row lg:flex-wrap lg:justify-center'>
        <div className='max-w-lg mr-10 mb-8 lg:w-4/12'>
          <img src={PilarWorking} alt='Pilar working' />
          <figcaption className='w-full text-right text-xs italic'>
            © Jonas Šopa
          </figcaption>
        </div>
        <div className='lg:w-5/12'>
          <Paragraph>
            Hi! My name is Pilar Miralles and I was born in Almería (Spain) in
            1997. I am a composer and sound artist currently based in Helsinki
            (Finland). I speak Spanish, English and a bit of French. You can
            find my artist statement in the home page.
          </Paragraph>
          <br />
          <SubSectionHeader level={2}>Education</SubSectionHeader>
          <Paragraph>
            <li className='list-disc ml-4 my-2'>
              Master of Music in Composition at the Sibelius Academy, University
              of the Arts Helsinki (Finland, 2022)
            </li>
            <li className='list-disc ml-4 my-2'>
              Master’s Degree in Electroacoustic Composition, Higher Center of
              Musical Education “Katarina Gurska” of Madrid (Spain, 2020)
            </li>
            <li className='list-disc ml-4 my-2'>
              Bachelor’s Degree in Composition at the Royal Higher Conservatory
              of Music “Victoria Eugenia” of Granada (Spain, 2019)
            </li>
          </Paragraph>
          <br />
          <SubSectionHeader level={2}>
            Some of the things I’ve done
          </SubSectionHeader>
          <Paragraph>
            <ul>
              <li className='list-disc ml-4 my-2'>
                Merit grant awarded by the Martis Wegelius Foundation (Finland
                2022).
              </li>

              <li className='list-disc ml-4 my-2'>
                Participation as a composer at the Nordplus intensive course
                IMMEDIA in Vilnius (Lithuania, 2021).
              </li>
              <li className='list-disc ml-4 my-2'>
                Participation as an artist in Tampere Biennale 2022, setting the
                public sound and visual installation “Where Are the Workers
                Now?” during the festival.
              </li>
              <li className='list-disc ml-4 my-2'>
                Collaboration with composer and researcher José López-Montes
                into GenoMus project (computer-aided creativity tool) composing
                a computer-generated binaural piece in podcast format, published
                as part of FACBA, Festival of Contemporary Arts of Granada’s
                University (Spain, 2021).
              </li>
              <li className='list-disc ml-4 my-2'>
                Collaboration with Glauka Quintet and painter Lucía Rojas as a
                composer with the creation of Grito al cielo (Scream to the
                Sky), for wind quintet (2021), within the project Spain Arts,
                Science and Culture in Belgium 2021 – Ventanilla abierta.
              </li>
              <li className='list-disc ml-4 my-2'>
                Pieces commissioned by Avanti! Chamber Orchestra (Finland,
                2022), Orchester im Treppenhaus (Germany, 2022) or Zodiac Trio
                (US, 2021), among others.
              </li>
            </ul>
          </Paragraph>
          <br />

          <SubSectionHeader level={2}>
            Some of the composition competitions I’ve been to
          </SubSectionHeader>
          <Paragraph>
            <li className='list-disc ml-4 my-2'>
              Akademiska Sångföreningen Choral Composition Competition – Third
              Prize (Helsinki, 2022)
            </li>
            <li className='list-disc ml-4 my-2'>
              Élan Prix by IRCAM and Orchestre national d’Île-de-France –
              Orchestra and Audience Awards (Paris, 2022)
            </li>
            <li className='list-disc ml-4 my-2'>
              Composer Slam Europe by Orchester im Treppenhaus – Finalist
              (Hannover, 2022)
            </li>
            <li className='list-disc ml-4 my-2'>
              {' '}
              Île de créations Composition Competition – Orchestra Award (Paris,
              2021)
            </li>
            <li className='list-disc ml-4 my-2'>
              Linköpings Studentsångare Composition Award – First Prize (Sweden,
              2020)
            </li>
            <li className='list-disc ml-4 my-2'>
              II Zodiac International Music Competition – First Prize,
              composition category (France-US, 2020)
            </li>
            <li className='list-disc ml-4 my-2'>
              {' '}
              International Antonín Dvorák Composition Competition – Second
              Prize, Junior category (Prague, 2019)
            </li>
            <SeeMore to='/media'>See more media {'>>'}</SeeMore>
          </Paragraph>
        </div>
      </div>
    </Section>
  )
}

export default FullAbout
