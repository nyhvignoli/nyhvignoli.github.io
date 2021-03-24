import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Wrapper, InfoSection, ImageSection, Filter, StackList, ListItem } from "./styles";
import { Title } from "../../global/styles";

const AboutMe = () => {
    const stacks = [
        "Javascript",
        "Typescript",
        "React",
        "HTML5",
        "CSS3",
        "GIT",
        "Node",
        "Java",
        "Android Studio",
        "MySQL",
        "Firebase",
        "Metodologias Ágeis"
    ];
    return (
        <Wrapper id="about-me">
            <InfoSection>
                <Title>Aline "Nyh" Vignoli</Title>
                <h2>Desenvolvedora Full Stack</h2>
                <p>
                    Oi tudo bem? Eu sou Aline mas pode me chamar de Nyh!<br/>
                    Descobri minha paixão por programação há mais ou menos 1 ano e hoje sou Desenvolvedora Web Full Stack recém formada.<br/>
                    Tenho um background artístico autônomo como musicista e tatuadora (profissão que excerci por 12 anos), e atualmente estou buscando incorporar essas experiências na minha carreira como programadora.<br/>
                    Enquanto mulher e lésbica, busco somar na inclusão e diversidade na tecnologia!

                </p>
                <StackList>
                    {stacks.map((stack, index) => {
                        return (
                            <ListItem key={index}>{stack}</ListItem>
                        )
                    })}
                </StackList>
            </InfoSection>
            <Filter>
                <ImageSection />
                <SocialMedia vertical/>
            </Filter>
        </Wrapper>
    );
}

export default AboutMe;