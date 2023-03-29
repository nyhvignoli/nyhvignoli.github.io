import styled from 'styled-components'
import {
  Border,
  Color,
  Spacing,
  Shadow,
  Breakpoints,
  FontSize
} from '../../../theme'

export const Wrapper = styled.div`
  ${({ border }) => `
    border-left: ${border.width} solid ${border.color};
    background-color: ${Color.GREY_600};
    border-radius: ${Border.RADIUS.X_SMALL};
    box-shadow: ${Shadow.CARD.normal(Color.GREY_700)};
    padding: ${Spacing.TABLET.XX_SMALL};
    display: flex;
    flex-direction: column;
    grid-column: span 7;
    font-size: ${FontSize.MOBILE.BODY_3};
    color: ${Color.GREY_100};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      padding: ${Spacing.DESKTOP.XX_SMALL};
      grid-column: span 7;
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-column: 2 / span 6;
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-column: 2 / span 10;
      font-size: ${FontSize.DESKTOP.BODY_3};
    }
  `}
`
