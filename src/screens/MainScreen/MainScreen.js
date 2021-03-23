import React from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import Knowledges from "../../components/Knowledges/Knowledges";
import Education from "../../components/Education/Education";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";

const MainScreen = () => {

    return (
        <div>
            <NavBar />
            <main>
                <AboutMe/>
                <Knowledges/>
                <Education />
                <Projects/>
            </main>
            <Footer/>
        </div>
    );
}

export default MainScreen;