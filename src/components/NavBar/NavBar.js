import React, { useState } from 'react'
import { Text } from '../../global/LanguagesContext'
import { BaseFlex } from '../../global/styles'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { StyledNav, StyledList, ListItem, Anchor } from './styles'

const NavBar = () => {
  const [active, setActive] = useState(undefined)

  const handleActive = (menuItem) => {
    setActive(menuItem)
  }

  return (
    <StyledNav>
      <BaseFlex>
        <LanguageSelector />
        <StyledList>
          <Anchor
            onClick={() => handleActive('about-me')}
            active={active === 'about-me'}
            href="#top"
          >
            <ListItem>
              <Text tid="aboutMe" />
            </ListItem>
          </Anchor>
          <Anchor
            onClick={() => handleActive('projects')}
            active={active === 'projects'}
            href="#projects"
          >
            <ListItem>
              <Text tid="projects" />
            </ListItem>
          </Anchor>
          <Anchor
            onClick={() => handleActive('contact-me')}
            active={active === 'contact-me'}
            href="#contact"
          >
            <ListItem>
              <Text tid="contactMe" />
            </ListItem>
          </Anchor>
        </StyledList>
      </BaseFlex>
    </StyledNav>
  )
}

export default NavBar
