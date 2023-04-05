import styled from 'styled-components'
import { Color, Spacing, Breakpoints } from '../../theme'

export const Wrapper = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${Color.GREY_700};
  text-align: center;
  z-index: -3000;
  padding: ${Spacing.MOBILE.HUGE} 0px;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    padding: ${Spacing.TABLET.HUGE} 0px;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.DESKTOP.HUGE} 0px;
  }
`

export const Content = styled.div`
  // padding: 0;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // gap: 5rem;
  // width: 100%;

  // @media (max-width: 1024px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   text-align: center;
  // }

  // @media (max-width: 600px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`
