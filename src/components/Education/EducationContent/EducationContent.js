import React from "react";
import { Wrapper, BaseContainer } from "./styles";

const EducationContent = (props) => {
    return (
        <Wrapper>
            <BaseContainer>
                <h2>{props.title}</h2>
                <span>-</span>
                <h2>{props.institution}</h2>
            </BaseContainer>
            <BaseContainer>
                <p>{props.period}</p>
                <span>|</span>
                <p>{props.duration}</p>   
            </BaseContainer>
            <p>{props.description}</p>
        </Wrapper>
    );
}

export default EducationContent;