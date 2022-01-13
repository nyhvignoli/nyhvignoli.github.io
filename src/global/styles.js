import styled from 'styled-components'
import { theme } from '../theme'

const { colors } = theme

export const Title = styled.h1`
  font-size: 4rem;
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  /* font-family: 'Syne Mono', monospace; */
  /* font-family: 'Ubuntu Condensed', sans-serif;  */
  /* font-family: 'Pathway Gothic One', sans-serif; */

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 3rem;
  opacity: 0.8;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
`

export const StackList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  gap: 1rem;

  ${({ small }) => small && `gap: 0.5rem;`}

  @media (max-width: 900px) {
    gap: 0.5rem;
  }
`

export const ListItem = styled.li`
  opacity: 0.8;
  border: 1px solid #fff;
  padding: 0.3rem 1rem;
  border-radius: 2rem;

  ${({ small }) =>
    small &&
    `
      font-size: 1rem;
      padding: 0.2rem 0.8rem ;
      border: 1px solid rgba(0, 67, 108, 0.64);
    `}

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  margin-top: 1rem;
  outline: none;

  ${({ orange }) =>
    orange &&
    `
      color: ${colors.orange};

      &:hover {
        opacity: 0.8;
      }
    `}

  @media (max-width: 400px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 800px) {
    margin: 0;
  }
`

export const StyledButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  box-shadow: 0px 1px 5px 1px #012940;
  border-radius: 2rem;
  min-width: 160px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  background-color: ${({ orange }) =>
    orange ? colors.lightOrange : colors.babyBlue};
  color: ${colors.white};
  transition: all 0.1s ease;

  &:focus {
    background-color: ${({ orange }) =>
      orange ? colors.deepOrange : colors.darkBlue};
  }

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 6px 2px #012940;
    opacity: 0.8;
    transform: scale(1.02);
    transition: all 0.1s ease;
  }

  @media (max-width: 400px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    margin: auto;
    align-self: center;
  }
`

export const BaseFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
