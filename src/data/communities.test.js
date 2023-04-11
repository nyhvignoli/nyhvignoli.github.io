import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.png'
import compiladorasLogo from '../assets/compiladoras.jpg'
import { getCommunities } from './communities'

test('getCommunities function', () => {
  const dictionaryMock = {
    labenuCommunityDescription: 'bar',
    codivasDescription: 'foo bar',
    compiladorasDescription: 'bar foo',
    gufersDescription: 'foo bar foo',
    ariaLabels: {
      labenu: 'foo',
      codivas: 'bar',
      compiladoras: 'foo',
      gufers: 'bar'
    }
  }

  const communities = getCommunities(dictionaryMock)

  const expectedResult = [
    {
      name: 'Labenu',
      logo: {
        image: labenuLogo,
        alt: 'Logo da Labenu, uma chame minimalista e poligonal nas cores laranja, amarelo a azul acinzentado'
      },
      href: 'https://www.labenu.com.br/',
      ariaLabel: dictionaryMock.ariaLabels.labenu,
      description: dictionaryMock.labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: 'Logo da Codivas, escrito codivas em preto e roxo'
      },
      href: 'https://www.codivas.com.br/',
      ariaLabel: dictionaryMock.ariaLabels.codivas,
      description: dictionaryMock.codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: 'Logo das Compiladoras, com fundo preto e um xícara de café com um coração vermelho dentro'
      },
      href: 'https://www.instagram.com/comunidadecafeina/',
      ariaLabel: dictionaryMock.ariaLabels.compiladoras,
      description: dictionaryMock.compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: 'Logo dos Gufers, quadrado preto escrito Gufers em branco'
      },
      href: 'https://www.youtube.com/channel/UCcL_lGqZNsa_9cR4ckjy07A',
      ariaLabel: dictionaryMock.ariaLabels.gufers,
      description: dictionaryMock.gufersDescription
    }
  ]

  expect(communities.length).toEqual(4)
  expect(communities).toEqual(expectedResult)
})
