export const getMyJourneySteps = ({
  music,
  tattoo,
  programming,
  musicJourney,
  tattooJourney,
  programmingJourney
}) => {
  const myJourneySteps = [
    {
      title: music,
      description: musicJourney
    },
    {
      title: tattoo,
      description: tattooJourney
    },
    {
      title: programming,
      description: programmingJourney
    }
  ]

  return myJourneySteps
}
