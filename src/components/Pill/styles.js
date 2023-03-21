import styled from 'styled-components'
import { Border, Spacing, Color, FontSize, FontWeight } from '../../theme'
import { PILL_SIZES } from './Pill'

export const smallStyles = `
  font-size: ${FontSize.MOBILE.BODY_5};
  font-weight: ${FontWeight.X_LIGHT};
  padding: ${Spacing.MOBILE.X_TINY} ${Spacing.MOBILE.XX_SMALL};
`

export const Wrapper = styled.div`
  ${({ size }) => `
    border: ${Border.WIDTH.THIN} solid ${Color.GREY_100};
    border-radius: ${Border.RADIUS.PILL};
    font-size: ${FontSize.MOBILE.BODY_4};
    padding: ${Spacing.MOBILE.TINY} ${Spacing.MOBILE.X_SMALL};
    background-color: ${Color.GREY_700};
    color: ${Color.GREY_100};

    ${size === PILL_SIZES.small && smallStyles}
  `}
`
