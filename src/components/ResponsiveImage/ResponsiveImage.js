import React, { useRef, useEffect, useState } from 'react'
import { Img } from './styles'

export const ResponsiveImage = ({
  width,
  height,
  src,
  srcSet,
  sizes,
  alt,
  className,
  rounded = false,
  styles = {},
  mediaStyles = {}
}) => {
  const imgRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })

    const imgElement = imgRef.current

    if (imgElement) {
      observer.observe(imgElement)
    }

    return () => {
      if (imgElement) {
        observer.unobserve(imgElement)
      }
    }
  }, [])

  return (
    <Img
      width={width}
      height={height}
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={isVisible ? 'auto' : 'lazy'}
      styles={styles}
      mediaStyles={mediaStyles}
      rounded={rounded}
    />
  )
}