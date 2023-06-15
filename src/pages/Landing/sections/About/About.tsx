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
          am a composer and sound artist based in Helsinki (Finland). I
          completed my Master's Degree in Electroacoustic Composition in 2020 in
          Madrid (Spain) and my Master of Music in Composition in 2022 at the
          Sibelius Academy of the University of the Arts Helsinki (Finland). I
          have recently been accepted as a preparatory doctoral student at the
          DocMus Doctoral School of the Sibelius Academy. My artistic research
          project is focused on the creation of sonic spaces where
          normally-automatized perception could be questioned.
        </Paragraph>
        <SeeMore to='/about-me'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  )
}

export default About
