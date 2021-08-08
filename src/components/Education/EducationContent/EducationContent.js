import React from 'react'
import { Wrapper, BaseContainer } from './styles'

const EducationContent = ({
  title,
  institution,
  period,
  duration,
  description
}) => {
  return (
    <Wrapper
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <BaseContainer>
        <h2>{title}</h2>
        <span>-</span>
        <h2>{institution}</h2>
      </BaseContainer>
      <BaseContainer>
        <p>{period}</p>
        <span>|</span>
        <p>{duration}</p>
      </BaseContainer>
      <p>{description}</p>
    </Wrapper>
  )
}

export default EducationContent
