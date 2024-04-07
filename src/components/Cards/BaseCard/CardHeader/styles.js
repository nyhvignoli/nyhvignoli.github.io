import styled from 'styled-components'
import { Spacing, Breakpoints } from '../../../../theme'

export const Wrapper = styled.div`
  margin-bottom: ${Spacing.MOBILE.X_SMALL};

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    margin-bottom: ${Spacing.TABLET.X_SMALL};
  }
`

export const Header = styled.div`
  ${({ flexDirection }) => `
    display: flex;
    flex-direction: ${flexDirection || 'row'};
    align-items: center;
    gap: ${Spacing.DESKTOP.TINY};

  `}
`
