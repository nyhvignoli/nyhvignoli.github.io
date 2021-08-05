import styled from 'styled-components'

export const SocialMediaWrapper = styled.aside`
  display: flex;
  padding: 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.vertical &&
    `
        flex-direction: column;
        position: absolute;
        right: 2rem;
        top: 30%;
    `}
`
