import React, { useContext } from 'react'
import { LanguageContext } from '../../global/LanguagesContext'
import { getData, DATA_TYPE } from '../../data'
import { DarkBox, GreyBox, Wrapper } from './styles'
import { GridLayout } from '../GridLayout'
import { CalloutCard } from '../Cards'
import { List, LIST_VARIANTS } from '../List'
import { InlineLink } from '../../global/styles'
import { Color } from '../../theme'

const Certification = () => {
  const { dictionary } = useContext(LanguageContext)
  const certificates = getData(dictionary, DATA_TYPE.certificates)

  return (
    <Wrapper data-testid="certificates-wrapper">
      <DarkBox />
      <GridLayout width="100%" position="absolute">
        <CalloutCard title={dictionary.certificates}>
          <List
            variant={LIST_VARIANTS.checkmark}
            color={Color.JADE_GREEN_300}
            paddingInlineStartSmall
          >
            {certificates.map(({ text, href, ariaLabel }) => {
              return (
                <li key={href}>
                  <InlineLink
                    href={href}
                    aria-label={`${ariaLabel} (${dictionary.ariaLabels.opensInANewTab})`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {text}
                  </InlineLink>
                </li>
              )
            })}
          </List>
        </CalloutCard>
      </GridLayout>
      <GreyBox />
    </Wrapper>
  )
}

export default Certification
