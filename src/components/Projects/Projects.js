import React, { useContext, useState } from "react";
import { Wrapper } from "./styles";
import { Subtitle } from "../../global/styles";
import Gallery from "../Gallery/Gallery";
import ScreenShotsGallery from "../ScreenShotsGallery/ScreenShotsGallery";
import { LanguageContext, Text } from "../../global/LanguagesContext";
import { getProjects } from "../../data/projects/projects";

const Projects = () => {
    const { dictionary } = useContext(LanguageContext);
    const projects = getProjects(dictionary);

    const [imageDetailsOpen, setImageDetailsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(0);

    const handleImageDetailsOpen = (projectIndex) => {
        setImageDetailsOpen(true);
        setSelectedProject(projectIndex);
    }

    const handleImageDetailsClose = () => {
        setImageDetailsOpen(false);
    }

    return (
        <Wrapper imageDetailsOpen id="projects">
            <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500"><Text tid="projects"/></Subtitle>
            <Gallery 
                imageDetailsOpen={imageDetailsOpen}
                projects={projects}
                handleImageDetailsOpen={handleImageDetailsOpen}
            />
            {imageDetailsOpen && 
                <ScreenShotsGallery 
                    handleImageDetailsClose={handleImageDetailsClose} 
                    images={projects[selectedProject].images}
                />
            }
        </Wrapper>
    );
}

export default Projects;