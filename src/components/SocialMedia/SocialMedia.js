import React from 'react'
import { SocialMediaWrapper, Icon } from './styles'
import {
  linkedin,
  github,
  instagram,
  twitter
} from '../../assets/social-media-icons'
import { Body4, CleanLink } from '../../global/styles'

export const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://github.com/nyhvignoli"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={github} alt="github icon" />
        <Body4>GitHub</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://www.linkedin.com/in/nyhvignoli/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={linkedin} alt="linkedin icon" />
        <Body4>LinkedIn</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://www.instagram.com/nyh_v/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={instagram} alt="instagram icon" />
        <Body4>Instagram</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://twitter.com/nyhdevignoli"
        target="_blank"
        rel="noreferrer"
      >
        <Icon src={twitter} alt="twitter icon" />
        <Body4>Twitter</Body4>
      </CleanLink>
    </SocialMediaWrapper>
  )
}
