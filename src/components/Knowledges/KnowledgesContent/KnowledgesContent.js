import React from 'react'
import { Wrapper } from './styles'
import { Title } from '../../../global/styles'

const KnowledgesContent = ({ full, icon, alt, title, knowledges }) => {
  return (
    <Wrapper data-aos="fade-out" data-aos-duration="2000" full={full}>
      <div>
        <img src={icon} alt={alt} />
        <Title>{title}</Title>
      </div>
      {knowledges.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </Wrapper>
  )
}

export default KnowledgesContent
