import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #012940;

    @media (max-width: 800px) {
        padding: 1rem 2rem;
    }
`;

export const Content = styled.div`
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 5rem;

    @media (max-width: 888px) {
        flex-direction: column;
        gap: 1rem;
    }
`;