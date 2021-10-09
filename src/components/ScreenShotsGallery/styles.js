import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { theme } from '../../theme'

const { colors } = theme

export const Background = styled.div`
  background-color: ${colors.modalTransparent};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
`

export const Wrapper = styled.div`
  width: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-grow: 1;

  @media (max-width: 420px) {
    width: 100%;
  }
`

export const Header = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`

export const ImageWrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 100px);
  overflow: auto;
`
