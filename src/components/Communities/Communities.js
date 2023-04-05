import React, { useContext } from 'react'
import { Body, Heading2 } from '../../global/styles'
import { Wrapper } from './styles'
import { BaseCard } from '../../components/Cards'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import { GridItem, GridLayout } from '../GridLayout'
import { Space } from '../Space'
import { Spacing } from '../../theme'

const Communities = () => {
  const { dictionary } = useContext(LanguageContext)
  const communities = getData(dictionary, DATA_TYPE.communities)

  return (
    <Wrapper data-testid="communities">
      <Space
        mobile={{ marginBottom: Spacing.MOBILE.LARGE }}
        tablet={{ marginBottom: Spacing.TABLET.LARGE }}
        desktop={{ marginBottom: Spacing.DESKTOP.LARGE }}
      >
        <Heading2>
          <Text tid="communities" />
        </Heading2>
      </Space>
      <GridLayout width="100%">
        {communities.map(
          ({ name, description, logo, href, ariaLabel }, index) => {
            const isEven = index % 2 === 0
            return (
              <GridItem
                key={`${name}-${index}`}
                gridColumn={{
                  mobile: 'auto / span 6',
                  tablet: { small: '2 / span 4', regular: 'auto / span 4' },
                  desktop: isEven ? '2 / span 5' : 'auto / span 5'
                }}
              >
                <BaseCard
                  linkProps={{ href, ariaLabel }}
                  noBackground
                  headerProps={{
                    title: name,
                    icon: { src: logo.image, alt: logo.alt },
                    flexDirection: 'column'
                  }}
                  name={name}
                >
                  <Body>{description}</Body>
                </BaseCard>
              </GridItem>
            )
          }
        )}
      </GridLayout>
    </Wrapper>
  )
}
export default Communities
