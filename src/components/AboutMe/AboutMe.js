import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Wrapper, InfoSection, ImageSection, Filter } from "./styles";
import { Title, StackList, ListItem, Anchor, StyledButton } from "../../global/styles";
import cvPdf from "../../assets/cv-aline-vignoli.pdf";

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
        "Firebase"
    ];

    return (
        <Wrapper id="about-me">
            <InfoSection>
                <Title 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    Aline "Nyh" Vignoli
                </Title>
                <h2 
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    Desenvolvedora Full Stack
                </h2>
                <p data-aos="fade-out" data-aos-duration="3000">
                    Oi tudo bem? Eu sou Aline mas pode me chamar de Nyh!<br/>
                    Descobri minha paixão por programação há mais ou menos 1 ano e hoje sou Desenvolvedora Web Full Stack recém formada.<br/>
                    Tenho um background artístico autônomo como musicista e tatuadora (profissão que excerci por 12 anos), e atualmente estou buscando incorporar essas experiências na minha carreira como programadora.<br/>
                    Enquanto mulher e lésbica, busco somar na inclusão e diversidade na tecnologia!

                </p>
                <StackList>
                    {stacks.map((stack, index) => {
                        return (
                            <ListItem data-aos="flip-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" data-aos-delay="100" key={index}>{stack}</ListItem>
                        )
                    })}
                </StackList>
                <Anchor data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine" data-aos-delay="500" href={cvPdf} download>
                    <StyledButton>Baixar CV em PDF</StyledButton>
                </Anchor>
            </InfoSection>
            <Filter>
                <ImageSection />
                <SocialMedia vertical/>
            </Filter>
        </Wrapper>
    );
}

export default AboutMe;