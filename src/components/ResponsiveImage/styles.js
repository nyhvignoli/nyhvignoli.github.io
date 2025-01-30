import styled from 'styled-components'

export const Img = styled.img`
  border-radius: ${({ rounded }) => (rounded ? '999px' : '0px')};
  width: ${({ styles }) => styles.width || 'auto'};
  object-fit: ${({ styles }) => styles.objectFit || 'cover'};
  height: ${({ styles }) => styles.height || 'auto'};
  position: ${({ styles }) => styles.position || 'static'};
  top: ${({ styles }) => styles.top || 'auto'};
  z-index: ${({ styles }) => styles.zIndex || 'auto'};
  opacity: ${({ styles }) => styles.opacity || 1};
  left: ${({ styles }) => styles.left || 'auto'};

  @media (max-width: 768px) {
    width: ${({ mediaStyles }) => `${mediaStyles?.width} !important` || 'auto'};
    opacity: ${({ mediaStyles }) =>  `${mediaStyles?.opacity} !important` || 1};
    top: ${({ mediaStyles }) => `${mediaStyles?.top} !important`|| 'auto'};
  }
`