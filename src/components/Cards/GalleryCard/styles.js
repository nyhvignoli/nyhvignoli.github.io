import styled from 'styled-components'
import { Border, Color, Shadow, Breakpoints, FontSize } from '../../../theme'

export const Wrapper = styled.div`
  ${({ noBackground }) => `
    min-width: 287px;
    max-width: 480px;
    background-color: ${noBackground ? 'transparent' : Color.GREY_600};
    border-radius: ${Border.RADIUS.REGULAR};
    box-shadow: ${noBackground ? 'none' : Shadow.CARD.normal(Color.GREY_700)};
    display: flex;
    flex-direction: column;
    grid-column: span 7;
    font-size: ${FontSize.MOBILE.BODY_3};
    color: ${Color.GREY_100};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      grid-column: span 7;
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-column: span 4;
    }
  
    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-column: span 6;
      font-size: ${FontSize.DESKTOP.BODY_3};
    }
  `}
`
