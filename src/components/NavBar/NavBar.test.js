import { fireEvent, render, screen } from '@testing-library/react'
import { theme } from '../../theme'
import NavBar from './NavBar'

describe('NavBar', () => {
  test('renders a nav tag', () => {
    render(<NavBar />)
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
  })

  test('renders LanguageSelector component', () => {
    render(<NavBar />)
    const languageSelector = screen.getByTestId('language-selector')
    expect(languageSelector).toBeInTheDocument()
  })

  describe('Menu', () => {
    test('renders a Unordered List', () => {
      render(<NavBar />)
      const list = screen.getByRole('list')
      expect(list).toBeInTheDocument()
    })

    test('"About Me" menu item should scroll to #top', () => {
      render(<NavBar />)
      const aboutMeMenuItem = screen.getByTestId('about-me-item')
      expect(aboutMeMenuItem).toHaveAttribute('href', '#top')
    })

    test('"Projects" menu item should scroll to #projects', () => {
      render(<NavBar />)
      const projectsMenuItem = screen.getByTestId('projects-item')
      expect(projectsMenuItem).toHaveAttribute('href', '#projects')
    })

    test('"Contact" menu item should scroll to #contact', () => {
      render(<NavBar />)
      const contactMeMenuItem = screen.getByTestId('contact-me-item')
      expect(contactMeMenuItem).toHaveAttribute('href', '#contact')
    })

    test('should change item style if is active', () => {
      render(<NavBar />)
      const menuItem = screen.getByTestId('about-me-item')
      const expectedStyle = {
        'border-bottom': `2px solid ${theme.colors.lightOrange}`
      }

      fireEvent.click(menuItem)

      expect(menuItem).toHaveStyle(expectedStyle)
    })
  })
})
