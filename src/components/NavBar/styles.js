import styled from "styled-components";

export const StyledNav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 0.5rem 2rem;
    background-color: rgba(0, 67, 108, 0.9);
    box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.2);
    color: #FFF;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    height: 3em;
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
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: inherit;
    transform: scale(1);
    transition: all 0.2s ease-in-out 0.1s;

    &:hover {
        opacity: 0.8;
        transform: scale(1.2);
        transition: all 0.2s ease-in-out 0.1s;
    }

    &:active {
        color: #f2b33e;
    }
`