import React from "react";
import { ListItem, StackList } from "../../AboutMe/styles";
import { Wrapper, ImageContainer, Content, TextWrapper, ButtonGroup, StyledButton, Title, Image } from "./styles";

const ProjectsContent = (props) => {

    const fullStackButtonGroup = (
        <ButtonGroup>
            <a 
                href={props.githubLink.frontend}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Front-end no Github</StyledButton>
            </a>
            <a 
                href={props.githubLink.backend}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Back-end no Github</StyledButton>
            </a>
        </ButtonGroup>
    );

    const backendButtonGroup = (
        <ButtonGroup>
            <a 
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Ver no Github</StyledButton>
            </a>
            <a
                href={props.url}
                target="_blank"
                rel="norefferer"
            >
                <StyledButton>Ver documentação</StyledButton>
            </a>
        </ButtonGroup>
    );

    const frontendButtonGroup = (
        <ButtonGroup>
            <a 
                href={props.githubLink}
                target="_blank"
                rel="noreferrer"
            >
                <StyledButton>Ver no Github</StyledButton>
            </a>
            <a
                href={props.url}
                target="_blank"
                rel="norefferer"
            >
                <StyledButton>Abrir site</StyledButton>
            </a>
        </ButtonGroup>
    );

    const getButtonGroup = () => {
        switch (props.type) {
            case "Full Stack":
                return fullStackButtonGroup;
            case "Backend":
                return backendButtonGroup;
            case "Frontend":
                return frontendButtonGroup;
        }
    };

    return (
        <Wrapper>
            <ImageContainer>
                <Image src={props.image.src} alt={props.image.alt}/>
            </ImageContainer>
            <Content>
                <TextWrapper>
                    <Title>{props.title}</Title>
                    <h2>{props.type}</h2>
                    <p>{props.description}</p>
                </TextWrapper>
                <StackList>
                    {props.tags.map((tag, index) => {
                        return (
                            <ListItem small key={index}>{tag}</ListItem>
                        )
                    })}
                </StackList>
                {getButtonGroup()}
            </Content>
        </Wrapper>
    );
}

export default ProjectsContent;