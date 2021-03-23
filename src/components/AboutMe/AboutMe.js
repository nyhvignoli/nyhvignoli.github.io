import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { Wrapper, InfoSection, ImageSection, Filter, StackList, ListItem } from "./styles";
import { Title } from "../../global/styles";

const AboutMe = () => {
    return (
        <Wrapper id="about-me">
            <InfoSection>
                <Title>Aline "Nyh" Vignoli</Title>
                <h2>Desenvolvedora Full Stack</h2>
                <p>
                    Maecenas at ipsum in velit porttitor pulvinar. Ut molestie tempus vehicula. Sed blandit quis mauris a posuere. Vestibulum bibendum dignissim nunc in vestibulum. Sed feugiat tincidunt pulvinar. Sed semper, felis sed rhoncus dapibus, quam neque sodales tortor, sagittis auctor erat arcu eget elit. Sed interdum ornare orci, quis mollis libero cursus ut. Quisque condimentum nisl quis metus elementum rutrum. Nullam hendrerit sollicitudin commodo. Quisque at augue id libero convallis eleifend. Maecenas a blandit libero, in facilisis sapien. Sed arcu massa, auctor nec sollicitudin at, feugiat suscipit nibh. Pellentesque a sollicitudin orci. Cras euismod, quam in hendrerit porttitor, arcu urna bibendum nunc, sit amet scelerisque massa velit at tellus.
                </p>
                <StackList>
                    <ListItem>Javascript</ListItem>
                    <ListItem>Typescript</ListItem>
                    <ListItem>HTML5</ListItem>
                    <ListItem>CSS3</ListItem>
                    <ListItem>React</ListItem>
                    <ListItem>Node</ListItem>
                    <ListItem>SQL</ListItem>
                </StackList>
            </InfoSection>
            <Filter>
                <ImageSection />
                <SocialMedia/>
            </Filter>
        </Wrapper>
    );
}

export default AboutMe;