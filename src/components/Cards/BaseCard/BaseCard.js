import React from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from './'

export const BaseCard = ({ headerProps, contentProps, noBackground }) => {
  const { title = '', subtitle = '', icon = {} } = headerProps
  const { list = [] } = contentProps

  return (
    <Wrapper noBackground={noBackground}>
      <CardHeader title={title} subtitle={subtitle} icon={icon} />
      <CardContent list={list} />
      <CardFooter />
    </Wrapper>
  )
}
