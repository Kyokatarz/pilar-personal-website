import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { ImSoundcloud2 } from 'react-icons/im'
import { IconContext } from 'react-icons'
import axios from 'axios'

import Article from '../../../../components/Article'
import Section from '../../../../components/Section'

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('submitting form')

    try {
      const res = await axios.post('http://localhost:8080/api/v1/sendMail', {
        name,
        email,
        message,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Section>
      <Article>
        <h1 className='text-4xl font-bold text-left mb-8 w-full'>Contact</h1>
        <div className='flex flex-col items-start mb-8'>
          <p>
            <span className='mr-8 font-semibold'>Email: </span>
            <span>pilota97@gmail.com</span>
          </p>
          <p>
            <span className='mr-8 font-semibold'>Phone: </span>
            <span>+358 123 458 98</span>
          </p>
        </div>
        <div className='flex flex-row mb-8'>
          <a
            href='https://www.facebook.com/pilota.miralles'
            target='_blank'
            rel='noreferrer'
          >
            <IconContext.Provider
              value={{
                size: '2.5em',
                color: '#3b5998',
                style: { marginRight: '8px' },
              }}
            >
              <FaFacebook />
            </IconContext.Provider>
          </a>
          <a
            href='https://soundcloud.com/pilar-miralles-huh'
            target='_blank'
            rel='noreferrer'
          >
            <IconContext.Provider
              value={{
                size: '2.5em',
                color: '#ff7700',
                style: { marginLeft: '8px' },
              }}
            >
              <ImSoundcloud2 />
            </IconContext.Provider>
          </a>
        </div>
        <form className='flex flex-col items-start' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Name...'
            className='mb-2 border-black border-b-2 w-full focus:outline-none text-lg pb-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email...'
            className='mb-2 border-black border-b-2 w-full focus:outline-none text-lg pb-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder='Message...'
            className='mb-2 border-black border-b-2 w-full focus:outline-none text-lg pb-2'
            style={{ resize: 'none' }}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className='mt-2 py-2 px-4 border-black border text-white bg-black rounded-sm'
            type='submit'
          >
            Send
          </button>
        </form>
      </Article>
    </Section>
  )
}

export default Contact
