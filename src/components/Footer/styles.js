import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: #DE910B;
`;

export const ContactInfos = styled.div`
    padding: 2rem 12rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
        font-size: 2rem;
    }

    @media (max-width: 800px) {
        padding: 2rem;
        p {
            font-size: 1.5rem;
        }
    }
`;

export const CopyRights = styled.div`
    background-color: #012940;
    padding: 1rem 2rem;  

    @media (max-width: 800px) {
        padding: 0.5rem;
        text-align: center;
    }
`;