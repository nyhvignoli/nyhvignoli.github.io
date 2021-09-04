import React, { useContext } from 'react'
import { Subtitle } from '../../global/styles'
import { ListItem, StackList } from '../../global/styles'
import KnowledgesContent from './KnowledgesContent/KnowledgesContent'
import { Wrapper, Content } from './styles'
import backend from '../../assets/backend.png'
import frontend from '../../assets/frontend.svg'
import { LanguageContext, Text } from '../../global/LanguagesContext'

const Knowledges = () => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <Wrapper data-testid="knowledges">
      <Subtitle
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
      >
        <Text tid="knowledges" />
      </Subtitle>
      <Content>
        <KnowledgesContent
          title={'Front-end'}
          knowledges={dictionary.frontendKnowledges}
          icon={frontend}
          alt="Ícone de diferentes telas e dispositivos"
        />
        <KnowledgesContent
          title={'Back-end'}
          knowledges={dictionary.backendKnowledges}
          icon={backend}
          alt="Ícone de uma tela com engrenagens"
        />
      </Content>
      <div>
        <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500">
          <Text tid="general" />
        </Subtitle>
        <StackList>
          {dictionary.generalKnowledges.map((item, index) => {
            return (
              <ListItem
                key={index}
                data-aos="flip-right"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic"
              >
                {item}
              </ListItem>
            )
          })}
        </StackList>
      </div>
    </Wrapper>
  )
}

export default Knowledges
