import React, { useState } from 'react'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Close from '@material-ui/icons/Close'
import { Wrapper, ImageWrapper, Header, Background, getStyles } from './styles'
import { IconButton } from '@material-ui/core'
import { ResponsiveImage } from '../ResponsiveImage'

const ScreenShotsGallery = ({ images, handleGalleryClose }) => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Background data-testid="screenshot-gallery-bg">
      <Wrapper>
        <Header square elevation={0}>
          <Typography variant="caption">
            {images[activeStep].caption}
          </Typography>
          <IconButton
            data-testid="sg-close-button"
            onClick={handleGalleryClose}
          >
            <Close />
          </IconButton>
        </Header>
        <ImageWrapper>
          
          <ResponsiveImage
            zoom
            scr={images[activeStep].sources.desktop}
            srcSet={`${images[activeStep].sources.mobile} 375w, ${images[activeStep].sources.tablet} 768w, ${images[activeStep].sources.desktop} 1024w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33.3vw"
            alt={images[activeStep].alt}
            style={getStyles()}
          />
        </ImageWrapper>

        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              data-testid="sg-next-button"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              data-testid="sg-back-button"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
            </Button>
          }
        />
      </Wrapper>
    </Background>
  )
}

export default ScreenShotsGallery
