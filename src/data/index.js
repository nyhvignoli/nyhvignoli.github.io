import { getCommunities } from './communities'
import { getCourses } from './courses'
import { getProjects } from './projects'
import { getTimelineSteps } from './timelineSteps'

export const DATA_TYPE = {
  communities: 'communities',
  courses: 'courses',
  projects: 'projects',
  timelineSteps: 'timelineSteps'
}

export const getData = (dictionary, type) => {
  const Data = {
    communities: getCommunities(dictionary),
    courses: getCourses(dictionary),
    projects: getProjects(dictionary),
    timelineSteps: getTimelineSteps(dictionary)
  }

  return Data[type]
}
