import styled from "styled-components";

export const Wrapper = styled.div`
    width: 50%;

    p {
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        width: 100%;

        h2 {
            font-size: 1.5rem;
            margin: 0;
        }
    }
`;

export const BaseContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;