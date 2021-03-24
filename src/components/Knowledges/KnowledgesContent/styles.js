import styled from "styled-components";

export const Wrapper = styled.div`
    width: ${props => props.full ? "100%" : "40%"};

    p {
        opacity: 0.8;
    }

    @media (max-width: 800px) {
        width: 100%;
    }
`;