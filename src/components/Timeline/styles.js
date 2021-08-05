import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #012940;
  text-align: center;
  z-index: -3000;

  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
  }
`

export const Content = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;

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
