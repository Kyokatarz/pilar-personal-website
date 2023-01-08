import React from 'react'
import ReactPlayer from 'react-player/youtube'

import Article from '../../../../components/Article'
import SoundCloudIframe from '../../../../components/Navbar/components/SoundCloudIframe'
import Section from '../../../../components/Section'
import SeeMore from '../../../../components/SeeMore'
import YoutubeCaptionPair from '../../../../components/YoutubeCaptionPair'
import { dedbirbSoundCloud } from '../../../../constants/soundCloud'

const Media = () => {
  return (
    <Section>
      <Article>
        <h1 className='text-4xl font-bold text-left mb-8 w-full'>Media</h1>

        <div className='w-full mb-12'>
          <ReactPlayer
            url='https://www.youtube.com/watch?v=5KWVNMhr85w&t=1343s'
            width='100%'
          />
          <figcaption className='w-full text-center text-sm text-gray-500 mt-1'>
            "Caressing You till My Fingers Bleed", for computer-generated sound
            (2020) – MuTeFest 20’ (Festival of Musical Creation with Technology
            2020)
          </figcaption>
        </div>

        <div className='w-full'>
          <YoutubeCaptionPair
            url='https://www.youtube.com/watch?v=SoXzcFe78Jw&t=2645s'
            caption='Cello Concerto, "Five Pieces of Advice" (2019) - Orchestre national d’Île-de-France, with Victor Julien-Laferrière'
          />
        </div>

        <SeeMore to='/media'> See more media {'>>'}</SeeMore>

        <div className='w-full'>
          <SoundCloudIframe
            url={dedbirbSoundCloud.url}
            caption={dedbirbSoundCloud.caption}
          />
        </div>

        <SeeMore
          to='https://soundcloud.com/pilar-miralles-huh'
          external
          target='_blank'
        >
          See more in SoundCloud {'>>'}
        </SeeMore>
      </Article>
    </Section>
  )
}

export default Media
