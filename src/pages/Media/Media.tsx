import React from 'react'

import ListItem from '../../components/ListItem/ListItem'
import SoundCloudIframe from '../../components/Navbar/components/SoundCloudIframe'
import Section from '../../components/Section'
import YoutubeCaptionPair from '../../components/YoutubeCaptionPair'
import soundCloud from '../../constants/soundCloud'

const youtubeMedia = [
  {
    title:
      '"How Difficult It Is to Cry Today", for piano, cello and tape (2022) – Defunensemble ',
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
  {
    title:
      '"Ota yksi, maksa kaksi" ("Get One for the Price of Two"), for prepared vibraphone and two CD players (2022) - QDuo (Alejandro Sancho Pérez and José Antonio Caballero Rodríguez)',
    url: 'https://www.youtube.com/watch?v=Wp0UG4VSiGc',
  },
  {
    title:
      '"Plastic Hugs. Emptiness", for bassoon, percussion and tape (2020) - Honk and Bonk! (Cassandra Roache and Bryan Wysocki)',
    url: 'https://www.youtube.com/watch?v=EQgjAt7dFG4',
  },
  {
    title:
      ' "Anti-Philosophy of the Subject; Mankind\'s Origin Is in Its Fellows", for oboe and string trio (2022) - Cuarteto Emispherio',
    url: 'https://www.youtube.com/watch?v=XwoO4x_gT54',
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

      <div className='w-full flex flex-col md:flex-row md:flex-wrap'>
        {soundCloud.map((item) => (
          <div className='w-full max-w-full mb-8 md:w-[calc(50%-theme(space.4))] xl:w-[calc(33%-theme(space.12))] xl:mx-2'>
            <SoundCloudIframe url={item.url} caption={item.caption} />
          </div>
        ))}
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
        <p className='underline'>Upcoming premiers</p>
        <ul className='mt-8'>
          <ListItem>
            "Ya no siento el deslizamiento, los roces del tiempo", for blinking
            lights, CD players, offstage viola and piano (2023) - To be
            premiered at VANG VI Festival in June 2023 (Madrid)
          </ListItem>
          <ListItem>
            "I don't expect anything from this afternoon; I will let time
            soften, stretch, open its seams and let the threads peek out from
            behind", for violin, bass clarinet, cello and percussion - To be
            premiered at Musiikin aika (Time of Music Festival) in July 2023
            (Viitasaari)
          </ListItem>
          <ListItem>
            "Brief Requiem for the Poets and Prayers", for chamber orchestra
            (2022) – To be premiered by Avanti! Chamber Orchestra in September
            2023 (Helsinki)
          </ListItem>
          <ListItem>
            Requiem mass, "Los hombres se mueren aunque no los maten" ("Men Die
            Although They Are Not Killed"), for orchestra, SATB choir and
            soloist piano (2020-22) - Pending
          </ListItem>
        </ul>
      </div>
    </Section>
  )
}

export default Media
