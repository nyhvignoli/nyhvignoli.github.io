import vizirLogo from '../assets/vizir.png'
import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.jpg'
import compiladorasLogo from '../assets/compiladoras.jpg'

export const getCommunities = ({
  vizirDescription,
  labenuCommunityDescription,
  codivasDescription,
  compiladorasDescription,
  gufersDescription
}) => {
  const communities = [
    {
      name: 'Vizir Software Studio',
      logo: {
        image: vizirLogo,
        alt: 'Logo da Vizir, um quadrado vermelhor rotacionado com a letra Z em branco no centro'
      },
      site: 'https://vizir.com.br/',
      description: vizirDescription
    },
    {
      name: 'Labenu Comunidade',
      logo: {
        image: labenuLogo,
        alt: 'Logo da Labenu, uma chame minimalista e poligonal nas cores laranja, amarelo a azul acinzentado'
      },
      site: 'https://www.labenu.com.br/',
      description: labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: 'Logo da Codivas, escrito codivas em preto e roxo'
      },
      site: 'https://www.codivas.com.br/',
      description: codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: 'Logo das Compiladoras, com fundo preto e um xícara de café com um coração vermelho dentro'
      },
      site: 'https://www.instagram.com/compiladoras/',
      description: compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: 'Logo dos Gufers, quadrado preto escrito Gufers em branco'
      },
      site: 'https://osgufers.github.io/',
      description: gufersDescription
    }
  ]

  return communities
}
