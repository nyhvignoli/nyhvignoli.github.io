import React, { useContext } from 'react'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { Wrapper } from './styles'
import { Heading2 } from '../../global/styles'
import { GridLayout } from '../GridLayout'
import { BaseCard } from '../Cards'
import backend from '../../assets/backend.png'
import frontend from '../../assets/frontend.svg'
import general from '../../assets/general-knowledges.jpg'

const Knowledges = () => {
  const { dictionary } = useContext(LanguageContext)

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
        <BaseCard
          headerProps={{
            title: 'Front-end',
            icon: {
              src: frontend,
              alt: 'Ícone de diferentes telas e dispositivos'
            }
          }}
          contentProps={{
            list: dictionary.frontendKnowledges
          }}
        />
        <BaseCard
          headerProps={{
            title: 'Back-end',
            icon: { src: backend, alt: 'Ícone de uma tela com engrenagens' }
          }}
          contentProps={{
            list: dictionary.backendKnowledges
          }}
        />
        <BaseCard
          headerProps={{
            title: dictionary.general,
            icon: {
              src: general,
              alt: 'Ícone de um cérebro como se fosse uma lâmpada'
            }
          }}
          contentProps={{
            list: dictionary.generalKnowledges
          }}
        />
      </GridLayout>
    </Wrapper>
  )
}

export default Knowledges
