import React from 'react'

type Props = {
  url: string
  caption?: string
}

const SoundCloudInframe = ({ url, caption }: Props) => {
  return (
    <>
      <iframe
        className='mt-12'
        title='Soundcloud'
        width='100%'
        height='300'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={url}
      />
      <figcaption className='w-full text-center text-sm text-gray-500 mt-1'>
        {caption}
      </figcaption>
    </>
  )
}

export default SoundCloudInframe
