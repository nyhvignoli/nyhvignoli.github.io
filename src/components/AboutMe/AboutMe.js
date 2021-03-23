import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

const AboutMe = () => {
    return (
        <section>
            <div>
                <h1>Aline "Nyh" Vignoli</h1>
                <h2>Desenvolvedora Full Stack</h2>
                <p>
                    Maecenas at ipsum in velit porttitor pulvinar. Ut molestie tempus vehicula. Sed blandit quis mauris a posuere. Vestibulum bibendum dignissim nunc in vestibulum. Sed feugiat tincidunt pulvinar. Sed semper, felis sed rhoncus dapibus, quam neque sodales tortor, sagittis auctor erat arcu eget elit. Sed interdum ornare orci, quis mollis libero cursus ut. Quisque condimentum nisl quis metus elementum rutrum. Nullam hendrerit sollicitudin commodo. Quisque at augue id libero convallis eleifend. Maecenas a blandit libero, in facilisis sapien. Sed arcu massa, auctor nec sollicitudin at, feugiat suscipit nibh. Pellentesque a sollicitudin orci. Cras euismod, quam in hendrerit porttitor, arcu urna bibendum nunc, sit amet scelerisque massa velit at tellus.
                </p>
                <ul>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div>
                <SocialMedia/>
            </div>
        </section>
    );
}

export default AboutMe;