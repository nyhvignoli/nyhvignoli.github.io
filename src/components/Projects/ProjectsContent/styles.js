import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 0 12rem;

    @media (max-width: 800px) {
        flex-wrap: wrap-reverse;
        padding: 0;
    }
`;

export const ImageContainer = styled.div`
    margin: auto;

    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TextWrapper = styled.div`
`;

export const Title = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    font-size: 3rem;
`;

export const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 800px) {
        gap: 1rem;
        justify-content: center;
    }
`;

export const StyledButton = styled.button`
    padding: 0.5rem;
    border: none;
    box-shadow: 2px 2px 5px 1px #012940;
    border-radius: 5px;
    width: 30%;
    min-width: 160px;
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