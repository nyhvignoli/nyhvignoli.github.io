import React from "react";
import { Text } from "../../global/LanguagesContext";
import { BaseFlex } from "../../global/styles";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { StyledNav, StyledList, ListItem, Anchor } from "./styles";

const NavBar = () => {

    return (
        <StyledNav>
            <BaseFlex>
                <LanguageSelector />
                <StyledList>
                    <Anchor href="#top"><ListItem><Text tid="aboutMe"/></ListItem></Anchor>
                    <Anchor href="#projects"><ListItem><Text tid="projects"/></ListItem></Anchor>
                    <Anchor href="#contact"><ListItem><Text tid="contactMe"/></ListItem></Anchor>
                </StyledList>
            </BaseFlex>
        </StyledNav>
    );
}

export default NavBar;