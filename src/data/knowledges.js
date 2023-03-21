import backend from '../assets/backend.png'
import frontend from '../assets/frontend.svg'
import general from '../assets/general-knowledges.jpg'

export const getKnowledges = ({
  frontendKnowledges,
  backendKnowledges,
  general: generalTitle,
  generalKnowledges
}) => {
  const knowledges = [
    {
      title: 'Front-end',
      icon: {
        src: frontend,
        alt: 'Ícone de diferentes telas e dispositivos'
      },
      list: frontendKnowledges
    },
    {
      title: 'Back-end',
      icon: {
        src: backend,
        alt: 'Ícone de uma tela com engrenagens'
      },
      list: backendKnowledges
    },
    {
      title: generalTitle,
      icon: {
        src: general,
        alt: 'Ícone de diferentes telas e dispositivos'
      },
      list: generalKnowledges
    }
  ]

  return knowledges
}
