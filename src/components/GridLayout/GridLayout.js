import React from 'react'
import { Grid } from './styles'

export const GridLayout = ({
  children,
  width = 'auto',
  position = 'initial'
}) => {
  return (
    <Grid width={width} position={position}>
      {children}
    </Grid>
  )
}
