import styled from 'styled-components'
import {
  Border,
  Color,
  Shadow,
  Breakpoints,
  FontSize,
  Spacing
} from '../../../theme'

export const Wrapper = styled.div`
  ${({ noBackground, hasMarginLeftOnMobile, hasMarginRightOnMobile }) => `
    width: 70%;
    min-width: 287px;
    max-width: 694px;
    background-color: ${noBackground ? 'transparent' : Color.GREY_600};
    border-radius: ${Border.RADIUS.REGULAR};
    box-shadow: ${noBackground ? 'none' : Shadow.CARD.normal(Color.GREY_700)};
    display: flex;
    flex-direction: column;
    grid-column: span 7;
    font-size: ${FontSize.MOBILE.BODY_3};
    color: ${Color.GREY_100};
    ${hasMarginLeftOnMobile && `margin-left: ${Spacing.MOBILE.SMALL}`};
    ${hasMarginRightOnMobile && `margin-right: ${Spacing.MOBILE.SMALL}`};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      grid-column: span 7;
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-column: span 4;
      margin-left: 0;
      margin-right: 0;
    }
  
    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-column: span 6;
      font-size: ${FontSize.DESKTOP.BODY_3};
    }
  `}
`
