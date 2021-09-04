import React, { useContext } from 'react'
import { Subtitle } from '../../global/styles'
import { Wrapper, Content, Arrow } from './styles'
import TimelineContent from './TimelineContent/TimelineContent'
import whiteArrow from '../../assets/white-arrow.png'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'

const Timeline = () => {
  const { dictionary } = useContext(LanguageContext)
  const steps = getData(dictionary, DATA_TYPE.timelineSteps)

  return (
    <Wrapper data-testid="timeline">
      <Subtitle
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="myJourney" />
      </Subtitle>
      <Content>
        <TimelineContent step={steps[0]} />
        <Arrow src={whiteArrow} />
        <TimelineContent step={steps[1]} />
        <Arrow src={whiteArrow} />
        <TimelineContent step={steps[2]} />
      </Content>
    </Wrapper>
  )
}

export default Timeline
