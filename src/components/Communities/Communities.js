import React, { useContext } from 'react'
import { Subtitle } from '../../global/styles'
import { Wrapper, Content } from './styles'
import vizirLogo from '../../assets/vizir.png'
import labenuLogo from '../../assets/labenu.png'
import codivasLogo from '../../assets/codivas.jpg'
import gufersLogo from '../../assets/gufers.jpg'
import compiladorasLogo from '../../assets/compiladoras.jpg'
import CommunitiesContent from './CommunitiesContent/CommunitiesContent'
import { LanguageContext, Text } from '../../global/LanguagesContext'

const Communities = () => {
  const { dictionary } = useContext(LanguageContext)

  const communities = [
    {
      name: 'Vizir Software Studio',
      logo: {
        image: vizirLogo,
        alt: 'Logo da Vizir, um quadrado vermelhor rotacionado com a letra Z em branco no centro'
      },
      site: 'https://vizir.com.br/',
      description: dictionary.vizirDescription
    },
    {
      name: 'Labenu Comunidade',
      logo: {
        image: labenuLogo,
        alt: 'Logo da Labenu, uma chame minimalista e poligonal nas cores laranja, amarelo a azul acinzentado'
      },
      site: 'https://www.labenu.com.br/',
      description: dictionary.labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: 'Logo da Codivas, escrito codivas em preto e roxo'
      },
      site: 'https://www.codivas.com.br/',
      description: dictionary.codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: 'Logo das Compiladoras, com fundo preto e um xícara de café com um coração vermelho dentro'
      },
      site: 'https://www.instagram.com/compiladoras/',
      description: dictionary.compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: 'Logo dos Gufers, quadrado preto escrito Gufers em branco'
      },
      site: 'https://osgufers.github.io/',
      description: dictionary.gufersDescription
    }
  ]

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
