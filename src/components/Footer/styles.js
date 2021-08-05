import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: #de910b;
`

export const ContactInfos = styled.div`
  padding: 2rem 12rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  p {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    padding: 2rem;
    p {
      font-size: 1.5rem;
    }
  }
`

export const BackToTop = styled.img`
  position: absolute;
  width: 10%;
  right: 10%;
  margin: auto;
  transform: rotate(90deg);
  transition: all 0.2s ease-in-out;
  animation-duration: 1.5s;
  animation-name: slideup;
  animation-iteration-count: infinite;

  @keyframes slideup {
    from {
      width: 40px;
      bottom: 5%;
      right: 40px;
    }

    to {
      width: 60px;
      bottom: 8%;
      right: 30px;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    @keyframes slideup {
      from {
        width: 8%;
        bottom: 1%;
        right: 15px;
      }

      to {
        width: 10%;
        bottom: 5%;
        right: 20px;
      }
    }
  }
`

export const CopyRights = styled.div`
  background-color: #012940;
  padding: 1rem 2rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
    text-align: center;
  }
`
