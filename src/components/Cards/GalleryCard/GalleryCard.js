import React from 'react'
import { Wrapper } from './styles'
import { CardHeader, CardContent, CardFooter } from '.'

export const GalleryCard = ({
  id = '',
  headerProps = { title: '', subtitle: '', image: {}, cta: {} },
  footerProps = { ctas: [] },
  children,
  noBackground,
  hasMarginLeftOnMobile,
  hasMarginRightOnMobile
}) => {
  return (
    <Wrapper
      id={id}
      data-testid="gallery-card-wrapper"
      noBackground={noBackground}
      hasMarginLeftOnMobile={hasMarginLeftOnMobile}
      hasMarginRightOnMobile={hasMarginRightOnMobile}
    >
      <CardHeader {...headerProps} />
      <CardContent>{children}</CardContent>
      <CardFooter {...footerProps} />
    </Wrapper>
  )
}
