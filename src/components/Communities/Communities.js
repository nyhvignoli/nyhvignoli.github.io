import React, { useContext } from 'react'
import { Subhead } from '../../global/styles'
import { Wrapper, Content } from './styles'
import CommunitiesContent from './CommunitiesContent/CommunitiesContent'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'

const Communities = () => {
  const { dictionary } = useContext(LanguageContext)
  const communities = getData(dictionary, DATA_TYPE.communities)

  return (
    <Wrapper data-testid="communities">
      <Subhead
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="communities" />
      </Subhead>
      <Content>
        {communities.map((community, index) => {
          return (
            <CommunitiesContent
              key={index}
              name={community.name}
              logo={community.logo}
              site={community.site}
              description={community.description}
            />
          )
        })}
      </Content>
    </Wrapper>
  )
}
export default Communities
