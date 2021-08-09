import React, { useContext } from 'react'
import { languageOptions } from '../../languages'
import { LanguageContext } from '../../global/LanguagesContext'
import { Select, Option } from './styles'

const LanguageSelector = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  // set selected language by calling context method
  const handleLanguageChange = (event) => userLanguageChange(event.target.value)

  return (
    <Select
      data-testid="language-selector"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ))}
    </Select>
  )
}

export default LanguageSelector
