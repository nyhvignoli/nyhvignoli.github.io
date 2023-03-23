import React from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from '.'

export const GalleryCard = ({
  headerProps = { title: '', subtitle: '', image: {}, cta: {} },
  footerProps = { ctas: [] },
  children,
  noBackground
}) => {
  return (
    <Wrapper data-testid="gallery-card-wrapper" noBackground={noBackground}>
      <CardHeader {...headerProps} />
      <CardContent>{children}</CardContent>
      <CardFooter {...footerProps} />
    </Wrapper>
  )
}
