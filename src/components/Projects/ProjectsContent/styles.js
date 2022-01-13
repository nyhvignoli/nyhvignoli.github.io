import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 0 5rem;

  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    padding: 0 1rem;
  }
`

export const ImageContainer = styled.div`
  margin: auto;
  width: 50%;

  @media (max-width: 800px) {
    width: auto;
  }
`

export const Image = styled.img`
  width: 100%;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${({ zoom }) =>
      !zoom &&
      `
        transform: scale(1.1);
        cursor: pointer;
      `}
  }
`

export const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ fullWidth }) => fullWidth && `width: 100%;`}

  @media (max-width: 800px) {
    width: auto;
  }
`

export const TextWrapper = styled.div``

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  font-size: 3rem;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`
