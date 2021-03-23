import React from "react";

const ProjectsContent = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.type}</h3>
            <p>{props.description}</p>
            <img src={props.image.src} alt={props.image.alt}/>
            <button>Ver no Github</button>
            <button>{props.type === "Front-end" ? "Abri site" : "Ver documentação"}</button>
        </div>
    );
}

export default ProjectsContent;