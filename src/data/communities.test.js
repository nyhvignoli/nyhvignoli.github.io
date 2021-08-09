import vizirLogo from '../assets/vizir.png'
import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.jpg'
import compiladorasLogo from '../assets/compiladoras.jpg'
import { getCommunities } from './communities'

test('getCommunities function', () => {
  const dictionaryMock = {
    vizirDescription: 'foo',
    labenuCommunityDescription: 'bar',
    codivasDescription: 'foo bar',
    compiladorasDescription: 'bar foo',
    gufersDescription: 'foo bar foo'
  }

  const communities = getCommunities(dictionaryMock)

  const expectedResult = [
    {
      name: 'Vizir Software Studio',
      logo: {
        image: vizirLogo,
        alt: 'Logo da Vizir, um quadrado vermelho rotacionado com a letra Z em branco no centro'
      },
      site: 'https://vizir.com.br/',
      description: dictionaryMock.vizirDescription
    },
    {
      name: 'Labenu Comunidade',
      logo: {
        image: labenuLogo,
        alt: 'Logo da Labenu, uma chame minimalista e poligonal nas cores laranja, amarelo a azul acinzentado'
      },
      site: 'https://www.labenu.com.br/',
      description: dictionaryMock.labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: 'Logo da Codivas, escrito codivas em preto e roxo'
      },
      site: 'https://www.codivas.com.br/',
      description: dictionaryMock.codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: 'Logo das Compiladoras, com fundo preto e um xícara de café com um coração vermelho dentro'
      },
      site: 'https://www.instagram.com/compiladoras/',
      description: dictionaryMock.compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: 'Logo dos Gufers, quadrado preto escrito Gufers em branco'
      },
      site: 'https://osgufers.github.io/',
      description: dictionaryMock.gufersDescription
    }
  ]

  expect(communities.length).toEqual(5)
  expect(communities).toEqual(expectedResult)
})
