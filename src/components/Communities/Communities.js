import React, { useContext } from 'react'
import { Subtitle } from '../../global/styles'
import { Wrapper, Content } from './styles'
import CommunitiesContent from './CommunitiesContent/CommunitiesContent'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'

const Communities = () => {
  const { dictionary } = useContext(LanguageContext)
  const communities = getData(dictionary, DATA_TYPE.communities)

  return (
    <Wrapper>
      <Subtitle
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="communities" />
      </Subtitle>
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
