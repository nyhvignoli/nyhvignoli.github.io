import React from "react";
import { Wrapper } from "./styles";
import { Subtitle } from "../../global/styles";
import musicatchersScreenshot from "../../assets/musicatchers.PNG";
import labedditScreenshot from "../../assets/labeddit.PNG";
import astromatchScreenshot from "../../assets/astromatch.PNG";
import Gallery from "../Gallery/Gallery";

const Projects = () => {
    const projects = [
        {
            title: "MusiCatchers",
            type: "Full Stack",
            image: {
                src: musicatchersScreenshot,
                alt: "foto da tela de login do projeto Musicatchers. Ondas sonoras em tons de roxo."
            },
            description: `Projeto Full Stack do bootcamp da escola Labenu.
                Trata-se de uma aplicação com funcionalidades básicas de um site para streaming de músicas.`,
            githubLink: {
                frontend: "https://github.com/nyhvignoli/musicatchers-frontend",
                backend: "https://github.com/nyhvignoli/musicatchers-backend"
            },
            url: "",
            tags: ["react", "axios", "styled-components", "material-ui", "nodejs", "mysql", "jest"]
        },
        {
            title: "Labeddit",
            type: "Front-end",
            image: {
                src: labedditScreenshot,
                alt: "foto do feed do projeto Labeddit, cor base do fundo em branco com a barra de navegação em tons de vermelho."
            },
            description: "Projeto Labeddit do bootcamp da escola Labenu. Uma rede social similar ao Reddit, onde é possível fazer postagens, comentar nos posts de outras pessoas e votar! Essa página utiliza uma API desenvolvida pela Labenu. Site responsivo para mobile.",
            githubLink: "https://github.com/nyhvignoli/labeddit",
            url: "http://nyhv-labeddit.surge.sh",
            tags: ["react", "axios", "styled-components", "material-ui"]
        },
        {
            title: "Astromatch",
            type: "Front-end",
            image: {
                src: astromatchScreenshot,
                alt: "foto da tela do projeto Astromatch. Um card com uma imagem da peixinha Dory."
            },
            description: `Projeto Astromatch do bootcamp da escola Labenu.
            Uma aplicação similar ao Tinder, com personalidades divertidas do cinema e TV onde você pode dar like ou não pra ver se dá match! :D
            Essa página utiliza uma API desenvolvida pela Labenu.
            Site responsivo para mobile.`,
            githubLink: "https://github.com/nyhvignoli/astromatch",
            url: "http://nyhv-astromatch.surge.sh/",
            tags: ["react", "axios", "styled-components", "material-ui"]
        },
    ];

    return (
        <Wrapper id="projects">
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500">Projetos</Subtitle>
            <Gallery 
                projects={projects}
            />
        </Wrapper>
    );
}

export default Projects;