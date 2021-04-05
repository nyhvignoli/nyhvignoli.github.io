import React from "react";
import { Subtitle } from "../../global/styles";
import { ListItem, StackList } from "../../global/styles";
import KnowledgesContent from "./KnowledgesContent/KnowledgesContent";
import { Wrapper, Content } from "./styles";
import backend from "../../assets/backend.png";
import frontend from "../../assets/frontend.svg";

const Knowledges = () => {
    const frontEndKnowledges = [
        "Desenvolvimento de aplicações Web em HTML, CSS e Javascript",
        "Componentização e manipulação de estado com ReactJS",
        "Integrações com API's REST",
        "Layouts responsivos e bibliotecas de estilização como Styled-components e Material-UI"
    ];

    const backEndKnowledges = [
        "Desenvolvimento de API's RESTful utilizando Node.js e Typescript",
        "Testes unitários e automatizados com Jest",
        "Banco de dados MySQL",
        "Familiaridade com Firebase"
    ];

    const generalKnowledges = [
        "AWS e EC2",
        "Metodologias Ágeis",
        "Clean Code",
    ];

    return (
        <Wrapper>
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">Conhecimentos</Subtitle>
            <Content>
                <KnowledgesContent
                    title={"Front-end"} 
                    knowledges={frontEndKnowledges}
                    icon={frontend}
                    alt="Ícone de diferentes telas e dispositivos"
                />
                <KnowledgesContent 
                    title={"Back-end"}
                    knowledges={backEndKnowledges}
                    icon={backend}
                    alt="Ícone de uma tela com engrenagens"
                />
            </Content>
            <div>
                <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500">Gerais</Subtitle>
                <StackList>
                    {generalKnowledges.map((item, index) => {
                        return (
                            <ListItem data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" key={index}>{item}</ListItem>
                        )
                    })}
                </StackList>
            </div>
            
        </Wrapper>
    );
}

export default Knowledges;