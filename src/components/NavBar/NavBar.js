import React from "react";
import { StyledNav, StyledList, ListItem, Anchor } from "./styles";

const NavBar = () => {

    return (
        <StyledNav>
            <StyledList>
                <Anchor href="#about-me"><ListItem>Sobre mim</ListItem></Anchor>
                <Anchor href="#projects"><ListItem>Projetos</ListItem></Anchor>
                <Anchor href="#contact"><ListItem>Contato</ListItem></Anchor>
            </StyledList>
        </StyledNav>
    );
}

export default NavBar;