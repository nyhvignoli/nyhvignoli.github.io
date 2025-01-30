import { profile2022Desktop, profile2022Mobile, profile2022Tablet } from '../assets/profile'

export const getBackgroundImages = () => {
  const images = [
    {
      sources: {
        desktop: profile2022Desktop,
        mobile: profile2022Mobile,
        tablet: profile2022Tablet
      },
      styles: {
        desktop: { opacity: '0.06', left: '0' },
        mobile: { opacity: '0.06', top: 0 }
      }
    },
    {
      sources: {
        desktop: profile2022Desktop,
        mobile: profile2022Mobile,
        tablet: profile2022Tablet
      },
      styles: {
        desktop: { opacity: '0.02', left: '20%' },
        mobile: { opacity: '0.01', top: '-20%' }
      }
    },
    {
      sources: {
        desktop: profile2022Desktop,
        mobile: profile2022Mobile,
        tablet: profile2022Tablet
      },
      styles: {
        desktop: { opacity: '0.01', left: '40%' },
        mobile: { opacity: '0', top: 0 }
      }
    }
  ]

  return images
}
