import guitarIcon from '../assets/guitar-128.png'
import tattooIcon from '../assets/tattoo-machine-128.png'
import devIcon from '../assets/notebook-128.png'

export const getTimelineSteps = ({
  music,
  tattoo,
  programming,
  musicJourney,
  tattooJourney,
  programmingJourney
}) => {
  const timelineSteps = [
    {
      title: music,
      icon: {
        image: guitarIcon,
        alt: 'Um ícone de violão branco'
      },
      description: musicJourney
    },
    {
      title: tattoo,
      icon: {
        image: tattooIcon,
        alt: 'Um ícone de uma máquina de tatuar branca'
      },
      description: tattooJourney
    },
    {
      title: programming,
      icon: {
        image: devIcon,
        alt: 'Um ícone de um notebook branco'
      },
      description: programmingJourney
    }
  ]

  return timelineSteps
}
