import React, { useContext, useState } from 'react'
import { Wrapper } from './styles'
import { Body4, Subhead } from '../../global/styles'
import ScreenShotsGallery from '../ScreenShotsGallery/ScreenShotsGallery'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import { GalleryCard } from '../Cards/GalleryCard'
import { ListWrapper } from '../Technologies/styles'
import { Pill, PILL_SIZES } from '../Pill'
import { Space } from '../Space'
import { Spacing } from '../../theme'

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
      {projects.map((project, index) => {
        return (
          <GalleryCard
            key={`${project.title}-${index}`}
            headerProps={{
              title: project.title,
              subtitle: project.type,
              cover: !!project.images?.length && {
                src: project.images[0].src,
                alt: project.images[0].alt
              },
              cta: project.type !== 'Back-end' && {
                text: dictionary.gallery,
                onClick: () => handleImageDetailsOpen(index)
              }
            }}
            footerProps={{ ctas: project.ctas }}
          >
            <Space mobile={{ marginBottom: Spacing.MOBILE.X_SMALL }}>
              <Body4>{project.description}</Body4>
            </Space>
            <ListWrapper>
              {project.tags.map((item, index) => {
                return (
                  <Pill
                    key={`${item}-${index}`}
                    noBackground
                    size={PILL_SIZES.small}
                    text={item}
                  />
                )
              })}
            </ListWrapper>
          </GalleryCard>
        )
      })}
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
