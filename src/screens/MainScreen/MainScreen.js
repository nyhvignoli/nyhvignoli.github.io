import React, { useEffect } from "react";
import { Wrapper, Content } from "./styles";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Knowledges from "../../components/Knowledges/Knowledges";
import Education from "../../components/Education/Education";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Timeline from "../../components/Timeline/Timeline";
import Communities from "../../components/Communities/Communities";

const MainScreen = () => {

    const smoothScroll = () => {
        window.document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();
        
                window.document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    useEffect(() => {
        smoothScroll();
    },[])

    return (
        <Wrapper id="top">
            <NavBar />
            <Content>
                <AboutMe />
                <Knowledges/>
                <Education />
                <Projects />
                <Timeline />
                <Communities />
            </Content>
            <Footer/>
        </Wrapper>
    );
}

export default MainScreen;