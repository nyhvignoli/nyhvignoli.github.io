import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${({ full }) => (full ? '100%' : '40%')};

  h2 {
    opacity: 10;
  }

  p {
    text-align: justify;
    opacity: 0.8;
    font-size: 1rem;
    font-family: 'Roboto Condensed', sans-serif;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 20%;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`
