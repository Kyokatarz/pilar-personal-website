import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { ImSoundcloud2, ImGithub } from 'react-icons/im'
import { IconContext } from 'react-icons'
import axios from 'axios'

import Article from '../../../../components/Article'
import Section from '../../../../components/Section'
import { serverEndpont } from '../../../../constants/app'

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [result, setResult] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setResult('Sending...')

      const res = await axios.post(`${serverEndpont}/api/v1/sendMail`, {
        name,
        email,
        message,
      })

      if (res.status === 200) {
        setResult('Message sent!')
        setEmail('')
        setName('')
        setMessage('')
        setError('')
        setTimeout(() => {
          setResult('')
        }, 3000)
      }
    } catch (error) {
      console.error(error)
      setResult('')
      setError('Something went wrong :O Message failed to send')
    }
  }

  return (
    <Section id='contact'>
      <Article>
        <h1 className='text-4xl font-bold text-left mb-8 w-full'>Contact</h1>
        <p className='text-left mb-8 border-b-2 border-black pb-4 max-w-max'>
          Please, feel free to reach me out using this form for more information
          about my music, my work or any other inquiry.
        </p>
        <div className='flex flex-col items-start mb-8'>
          <p>
            <span className='mr-8 font-semibold'>Email: </span>
            <span>pilota97@gmail.com</span>
          </p>
          <p>
            <span className='mr-8 font-semibold'>Phone: </span>
            <span>+358 414 955 736</span>
          </p>
        </div>
        <div className='flex flex-row mb-8'>
          <a
            href='https://www.facebook.com/pilota.miralles'
            target='_blank'
            rel='noreferrer'
            className='mr-4'
          >
            <IconContext.Provider
              value={{
                size: '2.5em',
                color: '#3b5998',
              }}
            >
              <FaFacebook />
            </IconContext.Provider>
          </a>
          <a
            href='https://soundcloud.com/pilar-miralles-huh'
            target='_blank'
            rel='noreferrer'
            className='mr-4'
          >
            <IconContext.Provider
              value={{
                size: '2.5em',
                color: '#ff7700',
              }}
            >
              <ImSoundcloud2 />
            </IconContext.Provider>
          </a>
          <a
            href='https://github.com/pilarmiralles'
            target='_blank'
            rel='noreferrer'
          >
            <IconContext.Provider
              value={{
                size: '2.5em',
                color: '#000000',
              }}
            >
              <ImGithub />
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
          <p className='text-green-500 italic'>{result}</p>
          <p className='text-red-500 italic'>{error}</p>
        </form>
      </Article>
    </Section>
  )
}

export default Contact
