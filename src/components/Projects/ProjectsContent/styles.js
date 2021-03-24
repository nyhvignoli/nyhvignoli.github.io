import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 5rem;
    margin-bottom: 5rem;
`;

export const ImageContainer = styled.div`
    width: 100%;
    margin: auto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    font-size: 5rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;
`;

export const StyledButton = styled.button`
    padding: 0.5rem;
    border: none;
    box-shadow: 2px 2px 5px 1px #012940;
    border-radius: 5px;
    width: 30%;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.2rem;
    background-color: #5b83a6;
    color: #FFF;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 6px 2px #012940;
        opacity: 0.8;
    }
`;