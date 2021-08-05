import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${(props) => (props.full ? '100%' : '40%')};

  h2 {
    opacity: 10;
  }

  p {
    text-align: justify;
    opacity: 0.8;
    font-size: 0.9rem;
    font-family: 'Roboto Condensed', sans-serif;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`
