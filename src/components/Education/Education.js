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
            description: `A Labenu é uma startup que forma Pessoas Desenvolvedoras Web Full Stack prontas para o mercado de trabalho. São mais de 1000 horas de programação que faz com que suas alunas e alunos sejam profissionais com conhecimentos adquiridos e postos em prática tanto no Back-end quanto no Front-end.`
        },
        {
            title: "Desenvolvimento Android",
            institution: "Udemy",
            duration: "100h",
            period: "2020 - presente",
            description: "Curso de Desenvolvimento Android Nativo, ministrado por Jamilton Damasceno. Aprendizado utilizando a IDE Android Studio, linguagem Java, banco de dados SQLite e NoSQL com Firebase."
        },
    ];

    return (
        <Wrapper>
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500">Formação</Subtitle>
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