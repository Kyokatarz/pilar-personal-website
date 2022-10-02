import React from 'react'
import Article from '../../../../components/Article'
import Section from '../../../../components/Section'

const Contact = () => {
  return (
    <Section>
      <Article>
        <h1 className='text-4xl font-bold text-left mb-8 w-full'>Contact</h1>
        <form className='flex flex-col'>
          <input type='text' placeholder='Name...' className='mb-2' />
          <input type='email' placeholder='Email...' className='mb-2' />
          <textarea
            placeholder='Message...'
            className='mb-2'
            style={{ resize: 'none' }}
            rows={5}
          />
          <button type='submit'>Send</button>
        </form>
      </Article>
    </Section>
  )
}

export default Contact
