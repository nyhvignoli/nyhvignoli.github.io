import React from "react";

const KnowledgesContent = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.knowledges.map((item, index) => {
                return (<p key={index}>{item}</p>)
            })}
        </div>
    );
}

export default KnowledgesContent;