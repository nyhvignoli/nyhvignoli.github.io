import React from "react";
import ProjectsContent from "./ProjectsContent/ProjectsContent";
import { Wrapper } from "./styles";
import { Subtitle } from "../../global/styles";
import musicatchersScreenshot from "../../assets/musicatchers.PNG";
import labedditScreenshot from "../../assets/labeddit.PNG";

const Projects = () => {
    const projects = [
        {
            title: "MusiCatchers",
            type: "Full Stack",
            image: {
                src: musicatchersScreenshot,
                alt: ""
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
            type: "Frontend",
            image: {
                src: labedditScreenshot,
                alt: ""
            },
            description: "Front-end do Projeto Labeddit do bootcamp da escola Labenu. Uma rede social similar ao Reddit, onde é possível fazer postagens, comentar nos posts de outras pessoas e votar! Essa página utiliza uma API desenvolvida pela Labenu. Site responsivo para mobile.",
            githubLink: "https://github.com/nyhvignoli/labeddit",
            url: "http://nyhv-labeddit.surge.sh",
            tags: ["react", "axios", "styled-components", "material-ui"]
        },
    ];

    return (
        <Wrapper id="projects">
            <Subtitle>Projetos</Subtitle>
            {projects.map((project, index) => {
                return (
                    <ProjectsContent
                        key={index}
                        title={project.title} 
                        type={project.type}
                        image={project.image}
                        description={project.description}
                        githubLink={project.githubLink}
                        url={project.url}
                        tags={project.tags}
                    />
                )
            })}
        </Wrapper>
    );
}

export default Projects;