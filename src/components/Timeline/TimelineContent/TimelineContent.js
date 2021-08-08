import React from 'react'
import { Wrapper, Header } from './styles'
import { Subtitle } from '../../../global/styles'

const TimelineContent = ({ full, step }) => {
  return (
    <Wrapper data-aos="fade-out" data-aos-duration="2000" full={full}>
      <Header>
        <img src={step.icon.image} alt={step.icon.alt} />
        <Subtitle>{step.title}</Subtitle>
      </Header>
      <p>{step.description}</p>
    </Wrapper>
  )
}

export default TimelineContent
