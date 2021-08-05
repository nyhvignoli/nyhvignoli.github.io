import styled from 'styled-components'

export const Wrapper = styled.div`
  justify-self: center;
  width: 100%;
  a {
    text-decoration: none;
    color: inherit;
  }

  h2 {
    opacity: 10;
    font-size: 1.5rem;
  }

  p {
    text-align: center;
    opacity: 0.8;
    font-size: 1rem;
    font-family: 'Roboto Condensed', sans-serif;
  }

  img {
    width: 40%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }
`
