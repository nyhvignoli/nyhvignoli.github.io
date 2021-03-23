import React from "react";
import KnowledgesContent from "./KnowledgesContent/KnowledgesContent";

const Knowledges = () => {
    const frontEndKnowledges = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut gravida nisl, in viverra dolor. Sed ullamcorper est purus, tristique tincidunt metus molestie ut.", "Ut molestie tempus vehicula. Sed blandit quis mauris a posuere. Vestibulum bibendum dignissim nunc in vestibulum. Sed feugiat tincidunt pulvinar. "];
    const backEndKnowledges = ["Sed interdum ornare orci, quis mollis libero cursus ut.", "Duis scelerisque orci eget malesuada molestie. Praesent eu risus mauris. Sed pellentesque, massa in lobortis pharetra, metus ante convallis eros, sit amet congue justo quam in turpis. Nunc et tortor posuere purus pellentesque luctus. Nunc in risus eget diam suscipit laoreet."];

    return (
        <section>
            <h1>Conhecimentos</h1>
            <KnowledgesContent
                title={"Front-end"} 
                knowledges={frontEndKnowledges}
            />
            <KnowledgesContent 
                title={"Back-end"}
                knowledges={backEndKnowledges}
            />
        </section>
    );
}

export default Knowledges;