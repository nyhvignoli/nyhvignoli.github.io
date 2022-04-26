import styled from 'styled-components'
import { theme } from '../../theme'

const { colors } = theme

export const Wrapper = styled.div`
  max-width: 800px;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Header = styled.button`
  width: 100%;
  color: #fff;
  border: none;
  box-shadow: ${({ active }) =>
    active
      ? `0px 2px 6px -2px ${colors.lightBlue}`
      : '0px 2px 6px -2px rgba(255, 255, 255, 0.5)'};
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? colors.lightBlue : 'initial')};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${colors.blue};
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2.5rem;
    }
  }
`

export const IconTitleLockup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }
`

export const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`

export const Body = styled.div`
  ${({ active }) => `
  text-align: left;
  opacity: ${active ? 0.8 : 0};
  font-size: 1.2rem;
  font-family: 'Nunito', sans-serif;  
  font-weight: 400;
  max-height: ${active ? '100%' : '0px'};
  padding-top: ${active ? '20px' : '0px'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`}
`

export const Arrow = styled.img`
  transition: transform 0.3s ease;
  width: 30px;
  transform: ${({ active }) => (active ? 'rotate(90deg)' : 'rotate(-90deg)')};
`
