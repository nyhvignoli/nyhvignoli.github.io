import styled from 'styled-components'
import { theme } from '../../theme'

const { colors } = theme

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  max-height: 56px;
  background-color: ${colors.transparentBlue};
  box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.2);
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;

  img {
    width: 38px;
  }

  @media (max-width: 580px) {
    padding: 0.5rem;
  }
`

export const LanguageMenu = styled.div`
  justify-self: flex-start;
  position: relative;
`

export const MenuIcon = styled.img`
  transition: all 0.4s ease-in-out 0.1s;

  @media (min-width: 580px) {
    display: none;
  }
`

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  padding-inline-start: 0;
  gap: 3rem;

  @media (max-width: 580px) {
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 30%;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    width: 80vw;
    margin: 0;
    z-index: -1;
    transition: all 0.2s ease-in-out 0.1s;
    text-align: center;

    ${({ hide }) =>
      hide &&
      `
        transition: all 0.4s ease-in-out 0.1s;
        left: 100%;
      `}
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

  ${({ active }) =>
    active
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
