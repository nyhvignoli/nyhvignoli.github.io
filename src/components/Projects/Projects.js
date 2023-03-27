import React, { useContext, useState } from 'react'
import { Wrapper } from './styles'
import { Heading2 } from '../../global/styles'
import ScreenShotsGallery from '../ScreenShotsGallery/ScreenShotsGallery'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import Carousel from '../Carousel/Carousel'
import { GridLayout } from '../GridLayout'

const Projects = () => {
  const { dictionary } = useContext(LanguageContext)
  const projects = getData(dictionary, DATA_TYPE.projects)
  const [imageDetailsOpen, setImageDetailsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const handleImageDetailsOpen = (projectIndex) => {
    setImageDetailsOpen(true)
    setSelectedProject(projectIndex)
  }

  const handleImageDetailsClose = () => {
    setImageDetailsOpen(false)
  }

  return (
    <Wrapper imageDetailsOpen id="projects" data-testid="projects">
      <Heading2 data-aos="fade-zoom-in" data-aos-duration="1500">
        <Text tid="projects" />
      </Heading2>
      <GridLayout noPaddingOnMobile>
        <Carousel
          projects={projects}
          handleImageDetailsOpen={handleImageDetailsOpen}
        />
      </GridLayout>
      {imageDetailsOpen && (
        <ScreenShotsGallery
          handleImageDetailsClose={handleImageDetailsClose}
          images={projects[selectedProject].images}
        />
      )}
    </Wrapper>
  )
}

export default Projects
