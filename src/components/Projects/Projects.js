import React from "react";
import ProjectsContent from "./ProjectsContent/ProjectsContent";
import { Wrapper } from "./styles";
import { Subtitle } from "../../global/styles";

const Projects = () => {
    const projects = [
        {
            title: "MusiCatchers",
            type: "Front-end",
            image: {
                src: "https://picsum.photos/seed/picsum/200/300",
                alt: ""
            },
            description: "Mauris dignissim dictum dolor sed pulvinar. Morbi viverra orci urna, et mattis ligula commodo quis. Morbi ornare justo sit amet suscipit suscipit. Curabitur vitae convallis nisi. Etiam lobortis ultricies dui, eu eleifend felis gravida ac. Quisque congue libero at urna scelerisque ultrices. Aliquam eu quam vitae erat rhoncus venenatis vitae in nisi. Morbi lobortis urna at neque feugiat, sit amet mollis est finibus. Pellentesque augue tortor, pretium sed fringilla nec, aliquam nec lectus. Quisque et enim eros.",
            githubLink: "",
            url: ""
        },
        {
            title: "Labeddit",
            type: "Front-end",
            image: {
                src: "https://picsum.photos/seed/picsum/200/300",
                alt: ""
            },
            description: "Quisque iaculis libero eu enim tincidunt lacinia. Pellentesque ultricies ex quis faucibus mollis. Aenean sed turpis nisi. Suspendisse quis tincidunt enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque lacinia elit, id facilisis justo fringilla ullamcorper. Sed et arcu a nunc laoreet feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi non lacus facilisis, cursus mauris sit amet, consequat lacus.",
            githubLink: "",
            url: ""
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
                    />
                )
            })}
        </Wrapper>
    );
}

export default Projects;