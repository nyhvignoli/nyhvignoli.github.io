import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  ${({ imageDetailsOpen }) => imageDetailsOpen && 'display: none'}

  &:disabled {
    opacity: 0.3;
  }

  svg {
    fill: #012940;
    width: 30px;
    height: 30px;
    transition: all 0.4s ease 0s;
    transition-property: all;
    transition-duration: 0.4s;
    transition-timing-function: ease;
    transition-delay: 0s;
  }

  #right {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);

    &:hover {
      margin-left: -50%;
    }
  }

  #left {
    &:hover {
      margin-left: 20%;
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
