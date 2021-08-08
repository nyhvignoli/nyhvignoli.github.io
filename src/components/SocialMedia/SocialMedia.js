import React from 'react'
import { SocialMediaWrapper } from './styles'
import linkedin from '../../assets/linkedin-icon.svg'
import github from '../../assets/github-icon.svg'
import whatsapp from '../../assets/whatsapp-icon.svg'
import instagram from '../../assets/instagram-icon.svg'

const SocialMedia = ({ vertical }) => {
  return (
    <SocialMediaWrapper vertical={vertical}>
      <a
        href="https://www.linkedin.com/in/nyhvignoli/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin icon" />
      </a>
      <a href="https://github.com/nyhvignoli" target="_blank" rel="noreferrer">
        <img src={github} alt="github icon" />
      </a>
      <a
        href="http://api.whatsapp.com/send?phone=55051997661364"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="whatsapp icon" />
      </a>
      <a
        href="https://www.instagram.com/nyh_v/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram icon" />
      </a>
    </SocialMediaWrapper>
  )
}

export default SocialMedia
