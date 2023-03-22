import React, { useContext } from 'react'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { Wrapper } from './styles'
import { Heading2 } from '../../global/styles'
import { GridLayout } from '../GridLayout'
import { BaseCard } from '../Cards'
import { getData, DATA_TYPE } from '../../data'
import { Technologies } from '../Technologies'
import { stacks } from '../../data/stacks'

const Knowledges = () => {
  const { dictionary } = useContext(LanguageContext)
  const knowledges = getData(dictionary, DATA_TYPE.knowledges)

  return (
    <Wrapper id="knowledges" data-testid="knowledges-wrapper">
      <Heading2
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="knowledges" />
      </Heading2>
      <GridLayout width="100%">
        {knowledges.map(({ title, icon, list }, index) => {
          return (
            <BaseCard
              key={`${title}-${index}`}
              headerProps={{ title, icon }}
              contentProps={{ list }}
            />
          )
        })}
        <Technologies title={dictionary.technologies} list={stacks} />
      </GridLayout>
    </Wrapper>
  )
}

export default Knowledges
