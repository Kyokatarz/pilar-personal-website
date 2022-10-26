import React from 'react'

import ListItem from '../../components/ListItem/ListItem'
import SoundCloudIframe from '../../components/Navbar/components/SoundCloudIframe'
import Section from '../../components/Section'
import YoutubeCaptionPair from '../../components/YoutubeCaptionPair'
import { dedbirbSoundCloud } from '../../constants/soundCloud'

const youtubeMedia = [
  {
    title:
      '"How Difficult is to Cry Today", for piano, cello and tape (2022) – Defunensemble ',
    url: 'https://youtu.be/Fxkw14wEIvw?t=1874',
  },
  {
    title:
      '"Grito al cielo" ("Scream to the Sky"), for wind quintet (2021) – Glauka Quintet',
    url: 'https://www.youtube.com/watch?v=i21ZI6iVQdU&amp;list=PLmCBAACC1BUa5u5jDfHdnVzeZ46RxWjnX&amp;index=3',
  },
  {
    title: '"Hugs Catalogue", for eleven players (2021) – Zagros Ensemble',
    url: 'https://youtu.be/m1DyHbCIPEk?t=3550',
  },
  {
    title:
      '"Abstractions IIb", for violin and piano (2021) – Yonatan Quemado and Niina Ranta',
    url: 'https://youtu.be/W8GhHBJ3UsM?t=1153',
  },
  {
    title:
      '"Hunger and Fear Bred Anger", for piano, cello and percussion (2021) – K!ART Ensemble',
    url: 'https://www.youtube.com/watch?v=Qh9zH1NIWQM',
  },

  {
    title:
      '"Caressing You till My Fingers Bleed", for computer-generated sound (2020) – MuTeFest 20’ (Festival of Musical Creation with Technology 2020)',
    url: 'https://youtu.be/5KWVNMhr85w?t=1343',
  },
  {
    title:
      'Cello Concerto, "Five Pieces of Advice" (2019) - Orchestre national d’Île-de-France, with Victor Julien-Laferrière',
    url: 'https://youtu.be/SoXzcFe78Jw?t=2645',
  },
  {
    title:
      '"Relative Distance", for flute and computer-generated sound (2019) – Paco Rojas Huertas',
    url: 'https://www.youtube.com/watch?v=2j2BSpcZgkA',
  },
  {
    title:
      'Piano Concerto, "Allegory of the Five Industrial Forces" (2022) – Orchestre national d’Île-de-France, with Marie-Ange Nguci',
    url: 'https://www.youtube.com/watch?v=quXTd4CR1sw',
  },
  {
    title: '"Abstraction II", bassoon and piano (2020) ',
    url: 'https://www.youtube.com/watch?v=HeeLMgzz1YQ',
  },
]

const Media = () => {
  return (
    <Section maxWidth='max-w-screen-2xl'>
      <h1 className='text-4xl font-bold text-center mb-6'>Media</h1>
      <div className='w-full flex flex-col md:flex-row md:flex-wrap'>
        {youtubeMedia.map((item, index) => (
          <div className='w-full max-w-full mb-8 md:w-[calc(50%-theme(space.4))] xl:w-[calc(33%-theme(space.12))] xl:mx-2'>
            <YoutubeCaptionPair url={item.url} caption={item.title} />
          </div>
        ))}
      </div>

      <div className='w-full'>
        <div className='w-full max-w-full mb-8 md:w-[calc(50%-theme(space.4))] xl:w-[calc(33%-theme(space.12))] xl:mx-2'>
          <SoundCloudIframe
            url={dedbirbSoundCloud.url}
            caption={dedbirbSoundCloud.caption}
          />
        </div>
      </div>

      <div className='w-full flex flex-col md:flex-row md:flex-wrap'>
        <iframe
          style={{ borderRadius: '12px' }}
          title='media-page-spotift'
          src='https://open.spotify.com/embed/episode/2jGEQovaGjl280KeV5epeb?utm_source=generator'
          width='100%'
          height='352'
          frameBorder='0'
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
        <figcaption className='w-full text-center text-sm text-gray-500 mt-1'>
          "Tiento", for computer-generated sound through GenoMus (computer-aided
          creativity tool based on autonomous metaprogramming of musical
          genotypes) – Collaborative composition with José López-Montes (2021)
        </figcaption>
      </div>

      <div className='w-full text-left mt-8 border-black border-4 p-4 '>
        <p className='underline'>Selection of pieces not performed yet</p>
        <ul className='mt-8'>
          <ListItem>
            "Brief Requiem for the Poets and Prayers", for chamber orchestra
            (2022) – To be premiered by Avanti! Chamber Orchestra in 2023
          </ListItem>
          <ListItem>
            "Anti-Philosophy of the Subject", for oboe, violin, viola and cello
            (2022) – To be premiered by Cuarteto Emispherio in 2023
          </ListItem>
          <ListItem>
            "Ota yksi, maksa kaksi", for two percussionists on prepared
            vibraphone and two old radio-CD players (2022) – To be premiered by
            QDuo in 2023
          </ListItem>
          <ListItem>
            Requiem mass, "Los hombres se mueren aunque no los maten" ("Men Die
            Although They Are Not Killed"), for orchestra, SATB choir and
            soloist piano (2020-22)
          </ListItem>
          <ListItem>"Two Fughettas", for violin and piano (2021)</ListItem>
          <ListItem>
            "Four Songs for the End of a Life", for SATB choir and piano (2020)
          </ListItem>
        </ul>
      </div>
    </Section>
  )
}

export default Media
