import React from 'react'
import { Wrapper } from './styles'
import { Space } from '../../Space'
import { Spacing } from '../../../theme'
import { Subhead2 } from '../../../global/styles'

export const CalloutCard = ({ title, children }) => {
  return (
    <Wrapper data-testid="callout-card-wrapper">
      <Space mobile={{ marginBottom: Spacing.MOBILE.SMALL }}>
        <Subhead2>{title}</Subhead2>
      </Space>
      {children}
    </Wrapper>
  )
}
