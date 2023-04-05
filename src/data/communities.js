import labenuLogo from '../assets/labenu.png'
import codivasLogo from '../assets/codivas.jpg'
import gufersLogo from '../assets/gufers.jpg'
import compiladorasLogo from '../assets/compiladoras.jpg'

export const getCommunities = ({
  labenuCommunityDescription,
  codivasDescription,
  compiladorasDescription,
  gufersDescription,
  ariaLabels
}) => {
  const communities = [
    {
      name: 'Labenu',
      logo: {
        image: labenuLogo,
        alt: 'Logo da Labenu, uma chame minimalista e poligonal nas cores laranja, amarelo a azul acinzentado'
      },
      href: 'https://www.labenu.com.br/',
      ariaLabel: ariaLabels.labenu,
      description: labenuCommunityDescription
    },
    {
      name: 'Codivas',
      logo: {
        image: codivasLogo,
        alt: 'Logo da Codivas, escrito codivas em preto e roxo'
      },
      href: 'https://www.codivas.com.br/',
      ariaLabel: ariaLabels.codivas,
      description: codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladorasLogo,
        alt: 'Logo das Compiladoras, com fundo preto e um xícara de café com um coração vermelho dentro'
      },
      href: 'https://www.instagram.com/compiladoras/',
      ariaLabel: ariaLabels.compiladoras,
      description: compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufersLogo,
        alt: 'Logo dos Gufers, quadrado preto escrito Gufers em branco'
      },
      href: 'https://osgufers.github.io/',
      ariaLabel: ariaLabels.gufers,
      description: gufersDescription
    }
  ]

  return communities
}
