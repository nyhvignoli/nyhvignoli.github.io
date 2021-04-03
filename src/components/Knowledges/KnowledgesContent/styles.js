import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${props => props.full ? "100%" : "40%"};

    div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    h1 {
        font-size: 3.5rem;
    }

    img {
        display: inline;
        width: 30%;
    }    

    p {
        opacity: 0.8;
    }

    @media (max-width: 888px) {
        width: 100%;

        h1 {
            font-size: 4rem;
        }
    }
`;