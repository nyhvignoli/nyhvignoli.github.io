import styled from 'styled-components'
import { theme } from '../../theme'

const { colors } = theme

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.babyBlue};
  padding: 2rem 5rem;

  @media (max-width: 800px) {
    padding: 1rem 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
  }
`
