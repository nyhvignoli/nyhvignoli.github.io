import React from 'react'
import { Button } from './styles'

export const DIRECTIONS = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom'
}

export const IconButton = ({ children, disabled, onClick = () => {} }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  )
}
