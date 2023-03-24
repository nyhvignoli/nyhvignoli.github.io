import React, { useContext } from 'react'
import { Wrapper } from './styles'
import { InlineLink } from '../../../../global/styles'
import { Space } from '../../../Space'
import { LanguageContext } from '../../../../global/LanguagesContext'

export const CardFooter = ({ ctas = [] }) => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <Wrapper data-testid="gallery-card-footer">
      {ctas.map((cta, index) => {
        return (
          !!cta.href && (
            <Space key={`${cta.href}-${index}`} mobile={{ marginTop: 'auto' }}>
              <InlineLink href={cta.href} aria-label={cta.ariaLabel}>
                {cta.text || dictionary.viewWebsite}
              </InlineLink>
            </Space>
          )
        )
      })}
    </Wrapper>
  )
}
