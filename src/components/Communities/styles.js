import styled from 'styled-components'

export const Wrapper = styled.section`
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #011726;
  text-align: center;
  z-index: -3000;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const Content = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100%;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
