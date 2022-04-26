import React from 'react'
import { Body, Header, Arrow, Wrapper, IconTitleLockup, Title } from './styles'
import { whiteArrow } from '../../assets/system-icons'

const Accordion = ({
  header = { title: '', icon: { image: '', alt: '' } },
  body,
  active,
  handleActive
}) => {
  const { title, icon } = header

  return (
    <Wrapper>
      <Header onClick={handleActive} active={active}>
        <IconTitleLockup>
          <img src={icon.image} alt={icon.alt} />
          <Title>{title}</Title>
        </IconTitleLockup>
        <Arrow src={whiteArrow} active={active} />
      </Header>
      <Body active={active}>{body}</Body>
    </Wrapper>
  )
}

export default Accordion
