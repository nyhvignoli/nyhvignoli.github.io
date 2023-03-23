import React from 'react'
import { Wrapper } from './styles'
import { InlineLink } from '../../../../global/styles'
import { Space } from '../../../Space'

export const CardFooter = ({ ctas = [] }) => {
  return (
    <Wrapper data-testid="gallery-card-footer">
      {ctas.map((cta, index) => {
        return (
          <Space key={`${cta.href}-${index}`} mobile={{ marginTop: 'auto' }}>
            <InlineLink href={cta.href} aria-label={cta.ariaLabel}>
              {cta.text || 'Ver website'}
            </InlineLink>
          </Space>
        )
      })}
    </Wrapper>
  )
}
