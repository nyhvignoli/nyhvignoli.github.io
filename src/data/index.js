import { getCommunities } from './communities'
import { getProjects } from './projects'
import { getTimelineSteps } from './timelineSteps'
import { getKnowledges } from './knowledges'

export const DATA_TYPE = {
  communities: 'communities',
  projects: 'projects',
  timelineSteps: 'timelineSteps',
  knowledges: 'knowledges'
}

export const getData = (dictionary, type) => {
  const Data = {
    communities: getCommunities(dictionary),
    projects: getProjects(dictionary),
    timelineSteps: getTimelineSteps(dictionary),
    knowledges: getKnowledges(dictionary)
  }

  return Data[type]
}
