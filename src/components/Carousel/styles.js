import styled from 'styled-components'
import { Breakpoints, Spacing } from '../../theme'

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${Spacing.MOBILE.SMALL};
  grid-column: 1/7;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-column: 1/9;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-column: 1/13;
  }
`

export const Slides = styled.div`
  display: flex;
  gap: ${Spacing.MOBILE.SMALL};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    scroll-snap-align: center;
    flex-shrink: 0;
    transition: transform 0.5s;
    position: relative;
  }
`
