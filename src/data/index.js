import { getCommunities } from './communities'
import { getProjects } from './projects'
import { getTimelineSteps } from './timelineSteps'
import { getKnowledges } from './knowledges'
import { getCertificates } from './certificates'

export const DATA_TYPE = {
  communities: 'communities',
  projects: 'projects',
  timelineSteps: 'timelineSteps',
  knowledges: 'knowledges',
  certificates: 'certificates'
}

export const getData = (dictionary, type) => {
  const Data = {
    communities: getCommunities(dictionary),
    projects: getProjects(dictionary),
    timelineSteps: getTimelineSteps(dictionary),
    knowledges: getKnowledges(dictionary),
    certificates: getCertificates(dictionary)
  }

  return Data[type]
}
