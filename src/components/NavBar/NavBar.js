import React, { useState } from 'react'
import { Text } from '../../global/LanguagesContext'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import {
  StyledNav,
  LanguageMenu,
  MenuIcon,
  StyledList,
  ListItem,
  Anchor
} from './styles'
import languagesIcon from '../../assets/languages.png'
import menuIcon from '../../assets/menu.png'
import closeIcon from '../../assets/cancel.png'

const NavBar = () => {
  const [active, setActive] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleActive = (menuItem) => {
    setActive(menuItem)
    setDrawerOpen(!drawerOpen)
  }

  const showSelect = () => {
    setOpen(true)
  }

  const hideSelect = () => {
    setOpen(false)
  }

  const showDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <StyledNav>
      <LanguageMenu onMouseOver={showSelect} onMouseLeave={hideSelect}>
        <img src={languagesIcon} alt="World map icon" />
        <LanguageSelector show={open} hideSelect={hideSelect} />
      </LanguageMenu>
      <StyledList hide={!drawerOpen}>
        <Anchor
          data-testid="about-me-item"
          onClick={() => handleActive('about-me')}
          active={active === 'about-me'}
          href="#top"
        >
          <ListItem>
            <Text tid="aboutMe" />
          </ListItem>
        </Anchor>
        <Anchor
          data-testid="knowledges"
          onClick={() => handleActive('knowledges')}
          active={active === 'knowledges'}
          href="#knowledges"
        >
          <ListItem>
            <Text tid="knowledges" />
          </ListItem>
        </Anchor>
        <Anchor
          data-testid="projects-item"
          onClick={() => handleActive('projects')}
          active={active === 'projects'}
          href="#projects"
        >
          <ListItem>
            <Text tid="projects" />
          </ListItem>
        </Anchor>
        <Anchor
          data-testid="contact-me-item"
          onClick={() => handleActive('contact-me')}
          active={active === 'contact-me'}
          href="#contact"
        >
          <ListItem>
            <Text tid="contactMe" />
          </ListItem>
        </Anchor>
      </StyledList>
      <MenuIcon
        onClick={showDrawer}
        src={drawerOpen ? closeIcon : menuIcon}
        alt="menu icon"
      />
    </StyledNav>
  )
}

export default NavBar
