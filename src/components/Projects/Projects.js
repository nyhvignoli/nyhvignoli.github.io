import React, { useContext, useState } from 'react'
import { Wrapper } from './styles'
import { Subhead } from '../../global/styles'
import Gallery from '../Gallery/Gallery'
import ScreenShotsGallery from '../ScreenShotsGallery/ScreenShotsGallery'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'

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
      <Subhead data-aos="fade-zoom-in" data-aos-duration="1500">
        <Text tid="projects" />
      </Subhead>
      <Gallery
        imageDetailsOpen={imageDetailsOpen}
        projects={projects}
        handleImageDetailsOpen={handleImageDetailsOpen}
      />
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
