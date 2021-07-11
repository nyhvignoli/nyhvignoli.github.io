import React from "react";
import { Subtitle } from "../../global/styles";
import SocialMedia from "../SocialMedia/SocialMedia";
import { StyledFooter, ContactInfos , CopyRights, BackToTop } from "./styles";
import whiteArrow from "../../assets/white-arrow.png";
import { Text } from "../../global/LanguagesContext";

const Footer = () => {

    return (
        <StyledFooter id="contact">
            <ContactInfos>
                <Subtitle><Text tid="contactMe"/></Subtitle>
                <p><Text tid="callToActionContactText"/></p>
                <p>
                    E-mail: nyhv.contato@gmail.com<br/>
                    {Text({ tid: "phone" })}: (51) 99766-1364
                </p>
                <SocialMedia/>
                <a href="#top"><BackToTop src={whiteArrow}/></a>
            </ContactInfos>
            <CopyRights><p>© 2021 ~ {Text({ tid: "developedBy" })} Aline "Nyh" Vignoli</p></CopyRights>
        </StyledFooter>
    );
}

export default Footer;