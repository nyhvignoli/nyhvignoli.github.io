import styled from 'styled-components'
import { Breakpoints, Spacing } from '../../theme'

export const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${Spacing.MOBILE.SMALL};
  max-width: 1024px;
  margin: auto;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-template-columns: repeat(12, 1fr);
  }
`
