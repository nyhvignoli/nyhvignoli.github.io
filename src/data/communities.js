import { codivas, compiladoras, gufers } from '../assets/logos'

export const getCommunities = ({
  labenuCommunityDescription,
  codivasDescription,
  compiladorasDescription,
  gufersDescription,
  ariaLabels,
  alternativeText
}) => {
  const communities = [
    {
      name: 'Codivas',
      logo: {
        image: codivas,
        alt: alternativeText.logos.codivas
      },
      href: 'https://www.codivas.com.br/',
      ariaLabel: ariaLabels.codivas,
      description: codivasDescription
    },
    {
      name: 'Compiladoras de Cafeína',
      logo: {
        image: compiladoras,
        alt: alternativeText.logos.compiladoras
      },
      href: 'https://www.instagram.com/comunidadecafeina/',
      ariaLabel: ariaLabels.compiladoras,
      description: compiladorasDescription
    },
    {
      name: 'Gufers',
      logo: {
        image: gufers,
        alt: alternativeText.logos.gufers
      },
      href: 'https://www.youtube.com/channel/UCcL_lGqZNsa_9cR4ckjy07A',
      ariaLabel: ariaLabels.gufers,
      description: gufersDescription
    }
  ]

  return communities
}
