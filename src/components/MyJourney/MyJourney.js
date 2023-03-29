import React, { useContext, useState } from 'react'
import { Subhead } from '../../global/styles'
import { Wrapper, Content } from './styles'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import Accordion from '../Accordion/Accordion'

const MyJourney = () => {
  const { dictionary } = useContext(LanguageContext)
  const steps = getData(dictionary, DATA_TYPE.myJourneySteps)
  const [active, setActive] = useState(-1)

  const handleActive = (index) => {
    if (index === active) {
      setActive(!active)
    } else {
      setActive(index)
    }
  }

  return (
    <Wrapper data-testid="my-journey">
      <Subhead
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="myJourney" />
      </Subhead>
      <Content>
        {steps.map(({ title, icon, description }, index) => {
          return (
            <Accordion
              key={index}
              header={{
                title,
                icon
              }}
              body={description}
              handleActive={() => handleActive(index)}
              active={active === index}
            />
          )
        })}
      </Content>
    </Wrapper>
  )
}

export default MyJourney
