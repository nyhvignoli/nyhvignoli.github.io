import { backend, frontend, general } from '../assets/general'

export const getKnowledges = ({
  frontendKnowledges,
  backendKnowledges,
  general: generalTitle,
  generalKnowledges,
  alternativeText
}) => {
  const knowledges = [
    {
      title: 'Front-end',
      icon: {
        src: frontend,
        alt: alternativeText.icons.frontend
      },
      list: frontendKnowledges
    },
    {
      title: 'Back-end',
      icon: {
        src: backend,
        alt: alternativeText.icons.backend
      },
      list: backendKnowledges
    },
    {
      title: generalTitle,
      icon: {
        src: general,
        alt: alternativeText.icons.generalKnowledges
      },
      list: generalKnowledges
    }
  ]

  return knowledges
}
