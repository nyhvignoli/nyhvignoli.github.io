import styled from "styled-components";

export const Title = styled.h1`
    font-size: 4rem;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0;
    /* font-family: 'Syne Mono', monospace; */
    /* font-family: 'Ubuntu Condensed', sans-serif;  */
    /* font-family: 'Pathway Gothic One', sans-serif; */

    @media (max-width: 800px) {
        font-size: 2.5rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 3rem;
    opacity: 0.8;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    /* font-family: 'Syne Mono', monospace; */
    /* font-family: 'Ubuntu Condensed', sans-serif;  */
    /* font-family: 'Pathway Gothic One', sans-serif; */
`;

export const StackList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding-inline-start: 0;
    gap: 1rem;

    ${props => props.small && `
        gap: 0.5rem;
    `}
`;

export const ListItem = styled.li`
    opacity: 0.8;
    border: 1px solid #FFF;
    padding: 0.3rem 1rem ;
    border-radius: 2rem;

    ${props => props.small && `
        font-size: 1rem;
        padding: 0.2rem 0.8rem ;
        border: 1px solid rgba(0, 67, 108, 0.64);
    `}
`;