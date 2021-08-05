import React from 'react'
import { Wrapper } from './styles'
import { Subtitle } from '../../../global/styles'

const CommunitiesContent = (props) => {
  return (
    <Wrapper data-aos="zoom-in-up" data-aos-duration="500">
      <a href={props.site} target="_blank" rel="noreferrer">
        <img src={props.logo.image} alt={props.logo.alt} />
        <Subtitle>{props.name}</Subtitle>
      </a>
      <p>{props.description}</p>
    </Wrapper>
  )
}

export default CommunitiesContent
