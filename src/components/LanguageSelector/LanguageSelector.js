import React, { useContext } from 'react'
import { LanguageContext } from '../../global/LanguagesContext'
import { LanguageMenu, MenuItem } from './styles'

const LanguageSelector = ({ show, hideSelect }) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  const handleItemClick = (selectedLanguage) => {
    userLanguageChange(selectedLanguage)
    hideSelect()
  }

  return (
    <LanguageMenu aria-label="language-menu" show={show}>
      <MenuItem
        selected={userLanguage === 'en'}
        onClick={() => handleItemClick('en')}
      >
        English
      </MenuItem>
      <MenuItem
        selected={userLanguage === 'pt'}
        onClick={() => handleItemClick('pt')}
      >
        Português
      </MenuItem>
    </LanguageMenu>
  )
}

export default LanguageSelector
