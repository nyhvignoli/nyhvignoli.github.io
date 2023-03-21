import React from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from './'

export const BaseCard = ({
  headerProps = { title: '', subtitle: '', icon: {} },
  contentProps = { list: [] },
  noBackground
}) => {
  const { title, subtitle, icon } = headerProps
  const { list } = contentProps

  return (
    <Wrapper data-testid="base-card-wrapper" noBackground={noBackground}>
      <CardHeader title={title} subtitle={subtitle} icon={icon} />
      <CardContent list={list} />
      <CardFooter />
    </Wrapper>
  )
}
