import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { ImSoundcloud2, ImGithub } from 'react-icons/im'
import { IconContext } from 'react-icons'

import Article from '../../../../components/Article'
import Section from '../../../../components/Section'

const Contact = () => {
  return (
    <Section id='contact'>
      <Article>
        <h1 className='text-4xl font-bold text-left mb-8 w-full'>Contact</h1>
        <p className='text-left mb-8 border-b-2 border-black pb-4 max-w-max'>
          Please, feel free to reach me out for more information about my music,
          my work or any other inquiry.
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
      </Article>
    </Section>
  )
}

export default Contact
