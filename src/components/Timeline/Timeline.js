import React, { useContext } from 'react'
import { Subtitle } from '../../global/styles'
import { Wrapper, Content, Arrow } from './styles'
import TimelineContent from './TimelineContent/TimelineContent'
import guitarIcon from '../../assets/guitar-128.png'
import tattooIcon from '../../assets/tattoo-machine-128.png'
import devIcon from '../../assets/notebook-128.png'
import whiteArrow from '../../assets/white-arrow.png'
import { LanguageContext, Text } from '../../global/LanguagesContext'

const Timeline = () => {
  const { dictionary } = useContext(LanguageContext)

  const music = {
    title: dictionary.music,
    icon: {
      image: guitarIcon,
      alt: 'Um ícone de violão branco'
    },
    description: dictionary.musicJourney
  }

  const tattoo = {
    title: dictionary.tattoo,
    icon: {
      image: tattooIcon,
      alt: 'Um ícone de uma máquina de tatuar branca'
    },
    description: dictionary.tattooJourney
  }

  const development = {
    title: dictionary.programming,
    icon: {
      image: devIcon,
      alt: 'Um ícone de um notebook branco'
    },
    description: dictionary.programmingJourney
  }

  return (
    <Wrapper>
      <Subtitle
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="myJourney" />
      </Subtitle>
      <Content>
        <TimelineContent step={music} />
        <Arrow src={whiteArrow} />
        <TimelineContent step={tattoo} />
        <Arrow src={whiteArrow} />
        <TimelineContent step={development} />
      </Content>
    </Wrapper>
  )
}

export default Timeline
