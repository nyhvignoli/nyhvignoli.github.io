import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 0 5rem;

    @media (max-width: 800px) {
        flex-wrap: wrap-reverse;
        padding: 0 1rem;
    }
`;

export const ImageContainer = styled.div`
    margin: auto;
    width: 50%;

    @media (max-width: 800px) {
        width: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    transition: all .5s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 800px) {
        width: auto;
    }
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

    @media (max-width: 400px) {
        gap: 1rem;
        flex-direction: column;
    }
`;