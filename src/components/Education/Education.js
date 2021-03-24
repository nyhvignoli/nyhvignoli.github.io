import React from "react";
import EducationContent from "./EducationContent/EducationContent";
import { Wrapper, Content } from "./styles";
import { Subtitle } from "../../global/styles";

const Education = () => {
    const courses = [
        {
            title: "Curso Web Full Stack",
            institution: "Labenu",
            duration: "1000h",
            period: "2020 - 2021",
            description: "Labenu é uma startup focada em Desenvolvimento Web Full Stack. Um bootcamp com mais de 1000 horas de prática em programação de pessoas desenvolvedoras utilizando ferramentas e tecnologias sempre atualizadas."
        },
        {
            title: "Desenvolvimento Android Nativo",
            institution: "Udemy",
            duration: "100h",
            period: "2020 - presente",
            description: "Desenvolvimento Android Nativo com Android Studio, linguagem Java, bancos SQLite e NoSQL com Firebase."
        },
    ];

    return (
        <Wrapper>
            <Subtitle>Formação</Subtitle>
            <Content>
                {courses.map((course, index) => {
                    return (
                        <EducationContent
                            key={index}
                            title={course.title} 
                            institution={course.institution}
                            duration={course.duration}
                            period={course.period}
                            description={course.description}
                        />
                    )
                })}
            </Content>
        </Wrapper>
    );
}

export default Education;