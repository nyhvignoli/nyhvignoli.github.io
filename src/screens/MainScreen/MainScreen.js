import React from "react";
import { Wrapper, Content } from "./styles";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Knowledges from "../../components/Knowledges/Knowledges";
import Education from "../../components/Education/Education";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";

const MainScreen = () => {

    return (
        <Wrapper>
            <NavBar />
            <Content>
                <AboutMe/>
                <Knowledges/>
                <Education />
                <Projects />
            </Content>
            <Footer/>
        </Wrapper>
    );
}

export default MainScreen;