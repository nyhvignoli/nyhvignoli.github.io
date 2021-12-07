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

const ProjectsContent = ({
  githubLink,
  url,
  type,
  images,
  handleImageDetailsOpen,
  index,
  title,
  description,
  tags
}) => {
  const fullStackButtonGroup = githubLink ? (
    <ButtonGroup>
      <Anchor href={githubLink.frontend} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="frontendOnGithub" />
        </StyledButton>
      </Anchor>
      <Anchor href={githubLink.backend} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="backendOnGithub" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  ) : (
    <Anchor href={url} target="_blank" rel="noreferrer">
      <StyledButton>
        <Text tid="openWebsite" />
      </StyledButton>
    </Anchor>
  )

  const backendButtonGroup = (
    <ButtonGroup>
      <Anchor href={githubLink} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="viewCodeOnGithub" />
        </StyledButton>
      </Anchor>
      <Anchor href={url} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="viewDocumentation" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  )

  const frontendButtonGroup = (
    <ButtonGroup>
      {githubLink && (
        <Anchor href={githubLink} target="_blank" rel="noreferrer">
          <StyledButton>
            <Text tid="viewCodeOnGithub" />
          </StyledButton>
        </Anchor>
      )}
      <Anchor href={url} target="_blank" rel="noreferrer">
        <StyledButton>
          <Text tid="openWebsite" />
        </StyledButton>
      </Anchor>
    </ButtonGroup>
  )

  const renderButtonGroup = () => {
    switch (type) {
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
      {type !== 'Back-end' && (
        <ImageContainer>
          <Image
            onClick={() => handleImageDetailsOpen(index)}
            src={images[0].src}
            alt={images[0].alt}
          />
        </ImageContainer>
      )}
      <Content fullWidth={type === 'Back-end'}>
        <TextWrapper>
          <Title>{title}</Title>
          <h2>{type}</h2>
          <p>{description}</p>
        </TextWrapper>
        <StackList small>
          {tags.map((tag, index) => {
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
