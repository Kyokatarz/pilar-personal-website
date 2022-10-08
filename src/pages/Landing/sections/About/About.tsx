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
          am a composer and sound artist currently based in Helsinki (Finland).
          I speak Spanish, English and a bit of French. You can find my artist
          statement in the home page.
        </Paragraph>
        <SeeMore to='#'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  )
}

export default About
