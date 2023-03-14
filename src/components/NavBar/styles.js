import styled from 'styled-components'
import { theme, Breakpoints, Color, Shadow, Spacing } from '../../theme'

const { colors } = theme

export const Wrapper = styled.div`
  grid-column: 1/7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-column: 1/9;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-column: 1/13;
  }
`

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.MOBILE.XX_SMALL} ${Spacing.MOBILE.X_SMALL};
  max-height: 56px;
  background-color: ${Color.GREY_600};
  box-shadow: ${Shadow.NAV};
  color: ${colors.white};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;

  img {
    width: 38px;
  }

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    padding: ${Spacing.MOBILE.XX_SMALL} ${Spacing.TABLET.X_SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.MOBILE.XX_SMALL} ${Spacing.DESKTOP.X_SMALL};
  }
`

export const LanguageMenu = styled.div`
  justify-self: flex-start;
  position: relative;
`

export const MenuIcon = styled.img`
  transition: all 0.4s ease-in-out 0.1s;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    display: none;
  }
`

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  padding-inline-start: 0;
  gap: ${Spacing.DESKTOP.XX_SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MAX}) {
    gap: ${Spacing.TABLET.XX_SMALL};
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
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
  transition: all 0.1s ease-in-out 0.1s;

  &:active {
    color: ${colors.lightOrange};
  }

  ${({ active }) =>
    active
      ? `
    transform: scale(1.1);
    transition: all 0.2s ease-in-out 0.1s;
    border-bottom: 2px solid ${colors.lightOrange}`
      : `&:hover {
    opacity: 0.6;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out 0.1s;
    border-bottom: 2px solid ${colors.lightOrange}
  }`}
`
