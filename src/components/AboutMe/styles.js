import styled from "styled-components";
import profilePic from "../../assets/profile-aline-vignoli.jpg";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    color: #FFF;
`;

export const InfoSection = styled.div`
    background-color: rgba(0, 67, 108, 0.64);
    padding: 2rem;

    h2, p {
        opacity: 0.8;
    }
`;

export const StackList = styled.ul`
    display: flex;
    list-style-type: none;
    padding-inline-start: 0;
    justify-content: space-between;
    gap: 3rem;
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
    min-width: 40vw;
    background-image: url(${profilePic});
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    height: 600px;
    position: relative;
`;

export const Filter = styled.div`
    background-color: rgba(78, 164, 217, 0.38);
`;