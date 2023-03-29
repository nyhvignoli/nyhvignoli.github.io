import styled from 'styled-components'
import { Color } from '../../theme'

export const Wrapper = styled.section`
  padding: 2rem 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${Color.GREY_800};
  text-align: center;
  z-index: -3000;

  @media (max-width: 800px) {
    padding: 0.5rem 2rem;
    padding-bottom: 2rem;
  }
`

export const Content = styled.div`
  padding: 0;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const Arrow = styled.img`
  transform: rotateY(180deg);
  width: 30px;
  height: 30px;
  margin-top: 12rem;

  @media (max-width: 1024px) {
    transform: rotate(270deg);
    margin-top: 0;
    align-self: center;
  }
`
