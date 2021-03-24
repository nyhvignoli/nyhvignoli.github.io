import React from "react";
import { Wrapper } from "./styles";
import { Title } from "../../../global/styles";

const KnowledgesContent = (props) => {
    return (
        <Wrapper full={props.full}>
            <Title>{props.title}</Title>
            {props.knowledges.map((item, index) => {
                return (<p key={index}>{item}</p>)
            })}
        </Wrapper>
    );
}

export default KnowledgesContent;