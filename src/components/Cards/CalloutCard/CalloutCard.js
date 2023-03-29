import React from 'react'
import { Wrapper } from './styles'
import { Color, Border } from '../../../theme'

export const CalloutCard = ({
  border = { color: Color.JADE_GREEN_500, width: Border.WIDTH.MEDIUM },
  children
}) => {
  return (
    <Wrapper data-testid="callout-card-wrapper" border={border}>
      {children}
    </Wrapper>
  )
}
