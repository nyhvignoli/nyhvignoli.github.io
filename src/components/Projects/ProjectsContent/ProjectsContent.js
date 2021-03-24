import React from "react";
import { Wrapper, ImageContainer, Content, TextWrapper, ButtonGroup, StyledButton, Title } from "./styles";

const ProjectsContent = (props) => {
    return (
        <Wrapper>
            <ImageContainer>
                <img src={props.image.src} alt={props.image.alt}/>
            </ImageContainer>
            <Content>
                <TextWrapper>
                    <Title>{props.title}</Title>
                    <h2>{props.type}</h2>
                    <p>{props.description}</p>
                </TextWrapper>
                <ButtonGroup>
                    <StyledButton>Ver no Github</StyledButton>
                    <StyledButton>{props.type === "Front-end" ? "Abri site" : "Ver documentação"}</StyledButton>
                </ButtonGroup>
            </Content>
        </Wrapper>
    );
}

export default ProjectsContent;