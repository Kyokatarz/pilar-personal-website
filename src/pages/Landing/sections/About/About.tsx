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
          current artistic and research work is focused on bringing about a
          series of favorable conditions within an artistic situation which
          could allow the audience to question their perception as the main tool
          for the liberation of consciousness of the world and the self.
        </Paragraph>
        <SeeMore to='/about-me'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  )
}

export default About
