import React from 'react'
import { Text } from '../../../global/LanguagesContext'
import {
  Anchor,
  ListItem,
  StackList,
  StyledButton
} from '../../../global/styles'
import {
  Wrapper,
  ImageContainer,
  Content,
  TextWrapper,
  ButtonGroup,
  Title,
  Image
} from './styles'

const ProjectsContent = (props) => {
  const fullStackButtonGroup = props.githubLink ? (
    <ButtonGroup>
      <Anchor href={props.githubLink.frontend} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="frontendOnGithub" />
        </StyledButton>
      </Anchor>
      <Anchor href={props.githubLink.backend} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="backendOnGithub" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  ) : (
    <Anchor href={props.url} target="_blank" rel="noreferrer">
      <StyledButton>
        <Text tid="openWebsite" />
      </StyledButton>
    </Anchor>
  )

  const backendButtonGroup = (
    <ButtonGroup>
      <Anchor href={props.githubLink} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="viewCodeOnGithub" />
        </StyledButton>
      </Anchor>
      <Anchor href={props.url} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="seeDocumentation" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  )

  const frontendButtonGroup = (
    <ButtonGroup>
      {props.githubLink && (
        <Anchor href={props.githubLink} target="_blank" rel="noreferrer">
          <StyledButton>
            <Text tid="viewCodeOnGithub" />
          </StyledButton>
        </Anchor>
      )}
      <Anchor href={props.url} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="openWebsite" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  )

  const renderButtonGroup = () => {
    switch (props.type) {
      case 'Full Stack':
        return fullStackButtonGroup
      case 'Back-end':
        return backendButtonGroup
      case 'Front-end':
        return frontendButtonGroup
      default:
        return null
    }
  }

  return (
    <Wrapper>
      {props.type !== 'Back-end' && (
        <ImageContainer>
          <Image
            onClick={() => props.handleImageDetailsOpen(props.index)}
            src={props.images[0].src}
            alt={props.images[0].alt}
          />
        </ImageContainer>
      )}
      <Content fullWidth={props.type === 'Back-end'}>
        <TextWrapper>
          <Title>{props.title}</Title>
          <h2>{props.type}</h2>
          <p>{props.description}</p>
        </TextWrapper>
        <StackList small>
          {props.tags.map((tag, index) => {
            return (
              <ListItem small key={index}>
                {tag}
              </ListItem>
            )
          })}
        </StackList>
        {renderButtonGroup()}
      </Content>
    </Wrapper>
  )
}

export default ProjectsContent
