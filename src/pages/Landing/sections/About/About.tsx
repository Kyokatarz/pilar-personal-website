import React from 'react'
import Article from '../../../../components/Article'
import Paragraph from '../../../../components/Paragraph'
import Section from '../../../../components/Section'
import SeeMore from '../../../../components/SeeMore'

const About = () => {
  return (
    <Section>
      <Article>
        <h1 className='text-5xl font-bold text-left mb-4'>Hi,</h1>
        <Paragraph>
          My name is Pilar Miralles and I was born in Almería (Spain) in 1997. I
          am a composer, sound artist and writer based in Espoo (Finland). I
          completed my Master's Degree in Electroacoustic Composition in 2020 in
          Madrid (Spain) and my Master of Music in Composition in 2022 at the
          Sibelius Academy of the University of the Arts Helsinki (Finland). My 
          current artistic and research work deals with the emotional and social 
          constraints imposed by the fast-paced everyday life and immediacy era, 
          expressing the necessity of personal space and time to free the perception 
          and consciousness as basics of human dignity. Besides seeking opportunities 
          to compose, I am aiming for my future Doctoral studies in composition and 
          compiling my main ideas into a literary essay.

        </Paragraph>
        <SeeMore to='/about-me'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  )
}

export default About
