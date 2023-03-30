import React from 'react'
import { Wrapper } from './styles'

export const GridItem = ({
  children,
  gridColumn = { mobile: '', tablet: { small: '', regular: '' }, desktop: '' },
  marginRightOverflow = { mobile: '' }
}) => {
  return (
    <Wrapper gridColumn={gridColumn} marginRightOverflow={marginRightOverflow}>
      {children}
    </Wrapper>
  )
}
