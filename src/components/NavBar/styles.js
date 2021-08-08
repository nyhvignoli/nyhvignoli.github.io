import styled from 'styled-components'
import { theme } from '../../theme'

const { colors } = theme

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0.5rem 2rem;
  background-color: ${colors.transparentBlue};
  box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.2);
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
`

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
`

export const ListItem = styled.li``

export const Anchor = styled.a`
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
  transform: scale(1);
  transition: all 0.2s ease-in-out 0.1s;

  &:active {
    color: ${colors.lightOrange};
  }

  ${(props) =>
    props.active
      ? `
    transform: scale(1.1);
    transition: all 0.4s ease-in-out 0.1s;
    border-bottom: 2px solid ${colors.lightOrange}`
      : `&:hover {
    opacity: 0.6;
    transform: scale(1.1);
    transition: all 0.4s ease-in-out 0.1s;
    border-bottom: 2px solid ${colors.lightOrange}
  }`}
`
