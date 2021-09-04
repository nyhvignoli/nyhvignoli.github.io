import { fireEvent, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'
import { LanguageProvider } from '../../global/LanguagesContext'

describe('LanguageSelector', () => {
  test('renders a Select element', () => {
    render(<LanguageSelector />)
    const selectElement = screen.getByLabelText('language-selector')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement.nodeName.toLowerCase()).toEqual('select')
  })

  test('renders a PT language as default value', () => {
    render(<LanguageSelector />)
    const selectElement = screen.getByLabelText('language-selector')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveProperty('value', 'pt')
  })

  test('Português option should have "pt" as value', () => {
    render(<LanguageSelector />)
    const option = screen.getByText('Português')
    expect(option).toBeInTheDocument()
    expect(option).toHaveProperty('value', 'pt')
  })

  test('English option should have "en" as value', () => {
    render(<LanguageSelector />)
    const option = screen.getByText('English')
    expect(option).toBeInTheDocument()
    expect(option).toHaveProperty('value', 'en')
  })

  test('should change the language to "English" when click on English option', () => {
    render(
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    )

    const selectElement = screen.getByLabelText('language-selector')
    fireEvent.change(selectElement, { target: { value: 'en' } })

    expect(selectElement).toHaveProperty('value', 'en')
  })

  test('should change the language to "Português" when click on Português option', () => {
    render(
      <LanguageProvider>
        <LanguageSelector />
      </LanguageProvider>
    )

    const selectElement = screen.getByLabelText('language-selector')
    fireEvent.change(selectElement, { target: { value: 'pt' } })

    expect(selectElement).toHaveProperty('value', 'pt')
  })
})
