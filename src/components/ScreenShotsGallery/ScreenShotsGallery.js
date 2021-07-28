import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Close from '@material-ui/icons/Close';
import { Image } from '../Projects/ProjectsContent/styles';
import { Wrapper, ImageWrapper, Header, Background } from "./styles";
import { IconButton } from '@material-ui/core';

const ScreenShotsGallery = (props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Background>
      <Wrapper>
        <Header square elevation={0}>
          <Typography variant="caption">{props.images[activeStep].caption}</Typography>
          <IconButton onClick={props.handleImageDetailsClose}><Close/></IconButton>
        </Header>
        <ImageWrapper>
          <Image 
            zoom
            src={props.images[activeStep].src}
            alt={props.images[activeStep].alt}
          />
        </ImageWrapper>
        
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </Wrapper>
    </Background>
  );
}

export default ScreenShotsGallery;