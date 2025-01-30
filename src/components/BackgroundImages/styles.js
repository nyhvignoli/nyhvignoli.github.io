import { Breakpoints } from '../../theme'

export const getStyles = (styles) => {
  return {
    width: '60%',
    objectFit: 'cover',
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 0,
    opacity: styles.desktop.opacity,
    left: styles.desktop.left,
  }
}

export const getMediaStyles = (styles) => {
  return {
    width: '100%',
    opacity: styles.mobile.opacity,
    top: styles.mobile.top
  }
}