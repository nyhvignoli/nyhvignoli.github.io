import styled from 'styled-components'
import { Spacing, Breakpoints } from '../../../../theme'

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.DESKTOP.TINY};
  margin-bottom: ${Spacing.MOBILE.XX_SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.XX_SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    margin-bottom: ${Spacing.DESKTOP.XX_SMALL};
  }
`
