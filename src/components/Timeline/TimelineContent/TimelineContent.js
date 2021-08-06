import React from 'react'
import { Wrapper, Header } from './styles'
import { Subtitle } from '../../../global/styles'

const TimelineContent = (props) => {
  return (
    <Wrapper data-aos="fade-out" data-aos-duration="2000" full={props.full}>
      <Header>
        <img src={props.step.icon.image} alt={props.step.icon.alt} />
        <Subtitle>{props.step.title}</Subtitle>
      </Header>
      <p>{props.step.description}</p>
    </Wrapper>
  )
}

export default TimelineContent
