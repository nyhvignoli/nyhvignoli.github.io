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
    gap: 3rem;
`;

export const ListItem = styled.li`
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: inherit;

    &:active {
        color: #f2b33e;
    }
`