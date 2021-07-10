import React from "react";
import { Text } from "../../global/LanguagesContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { StyledNav, StyledList, ListItem, Anchor } from "./styles";

const NavBar = () => {

    return (
        <StyledNav>
            <StyledList>
                <LanguageSelector />
                <Anchor href="#top"><ListItem><Text tid="aboutMe"/></ListItem></Anchor>
                <Anchor href="#projects"><ListItem><Text tid="projects"/></ListItem></Anchor>
                <Anchor href="#contact"><ListItem><Text tid="contactMe"/></ListItem></Anchor>
            </StyledList>
        </StyledNav>
    );
}

export default NavBar;