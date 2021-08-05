import React, { useContext } from 'react'

import { languageOptions } from '../../languages'
import { LanguageContext } from '../../global/LanguagesContext'

import { Select, Option } from './styles'

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value)

  return (
    <Select onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <Option key={id} value={id}>
          {name}
        </Option>
      ))}
    </Select>
  )
}
