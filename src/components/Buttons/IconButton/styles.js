import styled from 'styled-components'
import { Color, Border, Transition, Shadow } from '../../../theme'

export const Button = styled.button`
  border: none;
  background-color: ${Color.JADE_GREEN_400};
  border-radius: ${Border.RADIUS.CIRCLE};
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all ${Transition.DURATION.SUPER_FAST} ease;

  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.3; 
    cursor: not-allowed;
  `
      : `
    &:hover {
      opacity: 0.8;
      box-shadow: ${Shadow.GENERIC.LIGHT};
      transition: all ${Transition.DURATION.SUPER_FAST} ease;
    }

    &:active {
      background-color: ${Color.JADE_GREEN_300};
    }
  `}
`
