import React from 'react'
import { ResponsiveImage } from '../ResponsiveImage'
import { getMediaStyles, getStyles } from './styles'

export const BackgroundImages = ({ images }) => {
  return (
    <>
      {images.map(({ sources, alt = '', ariaHidden = true, styles }, index) => {
        console.log({ sources })
        console.log(getStyles(styles))
        return (
          <ResponsiveImage
            key={`${sources.desktop}-${index}`}
            alt={alt}
            src={sources.desktop}
            srcSet={`${sources.desktop} 1024w, ${sources.tablet} 768w, ${sources.mobile} 320w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
            aria-hidden={ariaHidden}
            styles={getStyles(styles)}
            mediaStyles={getMediaStyles(styles)}
          />
        )
      })}
    </>
  )
}