import React from "react";

const EducationContent = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.instituition}</h3>
            <p>{props.duration}</p>
            <p>{props.period}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default EducationContent;