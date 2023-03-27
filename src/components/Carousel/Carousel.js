import React, { useContext, useEffect, useState } from 'react'
import { Wrapper, Slides } from './styles'
import { IconButton } from '../Buttons'
import { Chevron } from '../Icons'
import { DIRECTIONS } from '../Icons/Chevron'
import { Body4 } from '../../global/styles'
import { LanguageContext } from '../../global/LanguagesContext'
import { GalleryCard } from '../Cards/GalleryCard'
import { ListWrapper } from '../Technologies/styles'
import { Pill, PILL_SIZES } from '../Pill'
import { Space } from '../Space'
import { Color, Spacing } from '../../theme'

const Carousel = ({ projects, handleImageDetailsOpen }) => {
  const { dictionary } = useContext(LanguageContext)
  const [firstRender, setFirstRender] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = projects.length

  const handleStepChange = (newStep) => {
    if (firstRender) setFirstRender(false)
    setActiveStep(newStep)
  }

  const scrollTo = (activeStep) => {
    const element = document.getElementById(`slide-${activeStep}`)
    if (!!element)
      element.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }

  useEffect(() => {
    if (!firstRender) scrollTo(activeStep)
  }, [activeStep, firstRender])

  return (
    <Wrapper data-testid="carousel-wrapper">
      <IconButton
        testId="previous"
        onClick={() => handleStepChange(activeStep - 1)}
        disabled={activeStep === 0}
        hideOnMobile
      >
        <Chevron
          direction={DIRECTIONS.left}
          color={Color.GREY_800}
          dimensions={{ width: '36', height: '36' }}
        />
      </IconButton>
      <Slides>
        {projects.map((project, index, array) => {
          const id = `slide-${index}`
          return (
            <GalleryCard
              id={id}
              key={id}
              hasMarginLeftOnMobile={index === 0}
              hasMarginRightOnMobile={index === array.length - 1}
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
      </Slides>
      <IconButton
        testId="next"
        onClick={() => handleStepChange(activeStep + 1)}
        disabled={activeStep === maxSteps - 1}
        hideOnMobile
      >
        <Chevron
          color={Color.GREY_800}
          dimensions={{ width: '36', height: '36' }}
        />
      </IconButton>
    </Wrapper>
  )
}

export default Carousel
