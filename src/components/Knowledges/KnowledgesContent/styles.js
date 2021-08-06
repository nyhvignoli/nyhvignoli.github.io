import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${(props) => (props.full ? '100%' : '40%')};

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3.5rem;
  }

  img {
    display: inline;
    width: 30%;
  }

  li {
    opacity: 0.8;
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 600px) {
    width: 100%;

    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`
