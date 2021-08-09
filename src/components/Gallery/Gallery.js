import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Wrapper, Button } from './styles'
import ProjectsContent from '../Projects/ProjectsContent/ProjectsContent'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Gallery = ({ projects, imageDetailsOpen, handleImageDetailsOpen }) => {
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = projects.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  const springConfig = {
    duration: '1s',
    easeFunction: 'ease-in',
    delay: '0s'
  }

  return (
    <Wrapper data-testid="gallery-wrapper">
      <Button
        data-testid="previous-button"
        imageDetailsOpen={imageDetailsOpen}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        <svg
          id="right"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </Button>
      <AutoPlaySwipeableViews
        data-testid="auto-play-swipeable-views"
        interval={7000}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        springConfig={springConfig}
      >
        {projects.map((project, index) => (
          <ProjectsContent
            key={index}
            index={index}
            title={project.title}
            type={project.type}
            images={project.images}
            description={project.description}
            githubLink={project.githubLink}
            url={project.url}
            tags={project.tags}
            handleImageDetailsOpen={handleImageDetailsOpen}
          />
        ))}
      </AutoPlaySwipeableViews>
      <Button
        data-testid="next-button"
        imageDetailsOpen={imageDetailsOpen}
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        <svg
          id="left"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </Button>
    </Wrapper>
  )
}

export default Gallery
