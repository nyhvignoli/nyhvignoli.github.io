import styled from "styled-components";
import profilePic from "../../assets/profile-aline-vignoli.jpg";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    color: #FFF;
    background-color: rgba(0, 67, 108, 0.64);

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 2rem;
    width: 55%;

    h2, p {
        opacity: 0.8;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const StackList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-inline-start: 0;
    gap: 2rem;
`;

export const ListItem = styled.li`
    opacity: 0.8;
    border: 1px solid #FFF;
    padding: 0.5rem;
    border-radius: 5px;
`;

export const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    background-image: url(${profilePic});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    height: 100%;

    @media (max-width: 1024px) {
        /* border-radius: 5px; */
        box-shadow: 2px 2px 6px 2px #012940;
    }
`;

export const Filter = styled.div`
    background-color: rgba(78, 164, 217, 0.38);
    width: 45%;
    height: 592px;
    position: relative;

    @media (max-width: 1024px) {
        width: 592px;
        margin: auto;
        /* border-radius: 5px; */
    }
`;