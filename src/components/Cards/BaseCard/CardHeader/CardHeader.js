import React from 'react'
import { Header, Wrapper } from './styles'
import { Subhead2 } from '../../../../global/styles'
import { Sizes } from '../../../../theme'
import { ResponsiveImage } from '../../../ResponsiveImage'

export const CardHeader = ({
  title,
  subtitle,
  icon = { src: '', alt: '' },
  flexDirection = 'row'
}) => {
  return (
    <Wrapper data-testid="base-card-header">
      <Header flexDirection={flexDirection}>
        {!!icon.src && (
          <ResponsiveImage
            src={icon.src}
            alt={icon.alt}
            width={Sizes.ICON.WIDTH.DESKTOP.HUGE}
            height={Sizes.ICON.HEIGHT.DESKTOP.HUGE}
            rounded
          />
        )}
        <Subhead2>{title}</Subhead2>
      </Header>
      {!!subtitle && <h4>{subtitle}</h4>}
    </Wrapper>
  )
}
