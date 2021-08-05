import React from 'react'
import { Wrapper } from './styles'
import { Subtitle } from '../../../global/styles'

const TimelineContent = (props) => {
  return (
    <Wrapper data-aos="fade-out" data-aos-duration="2000" full={props.full}>
      <img src={props.step.icon.image} alt={props.step.icon.alt} />
      <Subtitle>{props.step.title}</Subtitle>
      <p>{props.step.description}</p>
    </Wrapper>
  )
}

export default TimelineContent
