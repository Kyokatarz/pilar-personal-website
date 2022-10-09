import React from 'react'
import ReactPlayer from 'react-player'

type Props = {
  caption: string
  url: string
}

const YoutubeCaptionPair = ({ url, caption }: Props) => {
  return (
    <>
      <ReactPlayer url={url} width='100%' />
      <figcaption className='w-full text-center text-sm text-gray-500 mt-1'>
        {caption}
      </figcaption>
    </>
  )
}

export default YoutubeCaptionPair
