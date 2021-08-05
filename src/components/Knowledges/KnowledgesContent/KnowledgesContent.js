import React from 'react'
import { Wrapper } from './styles'
import { Title } from '../../../global/styles'

const KnowledgesContent = (props) => {
  return (
    <Wrapper data-aos="fade-out" data-aos-duration="2000" full={props.full}>
      <div>
        <img src={props.icon} alt={props.alt} />
        <Title>{props.title}</Title>
      </div>
      {props.knowledges.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </Wrapper>
  )
}

export default KnowledgesContent
