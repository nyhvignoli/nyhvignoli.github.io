import styled from "styled-components";

export const StyledNav = styled.nav`
    padding: 0.5rem 2rem;
    color: #FFF;
    font-family: 'Roboto Condensed', sans-serif;
`;

export const StyledList = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    padding-inline-start: 0;
    gap: 3rem;

    @media (max-width: 800px) {
        font-size: 1rem;
        justify-content: center;
    }
`;

export const ListItem = styled.li`
    transition: 0.8s;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: inherit;

    &:active {
        color: #f2b33e;
    }
`