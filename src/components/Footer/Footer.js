import React from "react";
import { Subtitle } from "../../global/styles";
import SocialMedia from "../SocialMedia/SocialMedia";
import { StyledFooter, ContactInfos , CopyRights, BackToTop } from "./styles";
import whiteArrow from "../../assets/white-arrow.png";

const Footer = () => {

    return (
        <StyledFooter id="contact">
            <ContactInfos>
                <Subtitle>Contato</Subtitle>
                <p>Gostou do meu trabalho? Bora bater um papo!</p>
                <p>
                    Email: nyhv.contato@gmail.com<br/>
                    Telefone: (51) 99667-1364
                </p>
                <SocialMedia/>
                <a href="#top"><BackToTop src={whiteArrow}/></a>
            </ContactInfos>
            <CopyRights><p>© 2021 ~ Desenvolvido por Aline "Nyh" Vignoli</p></CopyRights>
        </StyledFooter>
    );
}

export default Footer;