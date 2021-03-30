import React from "react";
import { Anchor, ListItem, StackList, StyledButton } from "../../../global/styles";
import { Wrapper, ImageContainer, Content, TextWrapper, ButtonGroup, Title, Image } from "./styles";

const ProjectsContent = (props) => {

    const fullStackButtonGroup = (
        <ButtonGroup>
            <Anchor 
                href={props.githubLink.frontend}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Front-end no Github</StyledButton>
            </Anchor>
            <Anchor 
                href={props.githubLink.backend}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Back-end no Github</StyledButton>
            </Anchor>
        </ButtonGroup>
    );

    const backendButtonGroup = (
        <ButtonGroup>
            <Anchor 
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Ver no Github</StyledButton>
            </Anchor>
            <Anchor
                href={props.url}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Ver documentação</StyledButton>
            </Anchor>
        </ButtonGroup>
    );

    const frontendButtonGroup = (
        <ButtonGroup>
            <Anchor 
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Ver no Github</StyledButton>
            </Anchor>
            <Anchor
                href={props.url}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Abrir site</StyledButton>
            </Anchor>
        </ButtonGroup>
    );

    const renderButtonGroup = () => {
        switch (props.type) {
            case "Full Stack":
                return fullStackButtonGroup;
            case "Back-end":
                return backendButtonGroup;
            case "Front-end":
                return frontendButtonGroup;
            default:
                return null;    
        }
    };

    return (
        <Wrapper>
            <ImageContainer>
                <Image 
                    onClick={() => props.handleImageDetailsOpen(props.index)} 
                    src={props.images[0].src} 
                    alt={props.images[0].alt}
                />
            </ImageContainer>
            <Content>
                <TextWrapper>
                    <Title>{props.title}</Title>
                    <h2>{props.type}</h2>
                    <p>{props.description}</p>
                </TextWrapper>
                <StackList small>
                    {props.tags.map((tag, index) => {
                        return (
                            <ListItem small key={index}>{tag}</ListItem>
                        )
                    })}
                </StackList>
                {renderButtonGroup()}
            </Content>
        </Wrapper>
    );
}

export default ProjectsContent;