import React from 'react'
import { LanguageProvider } from './global/LanguagesContext'
import MainScreen from './screens/MainScreen/MainScreen'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  AOS.init()

  return (
    <LanguageProvider>
      <MainScreen />
    </LanguageProvider>
  )
}

export default App
