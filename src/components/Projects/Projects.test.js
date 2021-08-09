import { fireEvent, render, screen } from '@testing-library/react'
import Projects from './Projects'
import musicatchersScreenshot from '../../assets/musicatchers.PNG'

describe('Projects', () => {
  test('renders a Projects Wrapper', () => {
    render(<Projects />)
    const projectsWrapper = screen.getByTestId('projects')
    expect(projectsWrapper).toBeInTheDocument()
  })

  test('renders Gallery component', () => {
    render(<Projects />)
    const galleryWrapper = screen.getByTestId('gallery-wrapper')
    expect(galleryWrapper).toBeInTheDocument()
  })

  test('should display ScreenShotsGallery when click on project image', () => {
    render(<Projects />)
    const selectedImage = screen.getByRole('img', {
      src: musicatchersScreenshot
    })

    fireEvent.click(selectedImage)

    const wrapper = screen.getByTestId('projects')
    const screenShotsGalleryWrapper = screen.getByTestId(
      'screenshot-gallery-bg'
    )

    expect(screenShotsGalleryWrapper).toBeInTheDocument()
    expect(wrapper.childElementCount).toEqual(3)
  })

  test('should hide ScreenShotsGallery when click on close button', () => {
    render(<Projects />)
    const selectedImage = screen.getByRole('img', {
      src: musicatchersScreenshot
    })

    fireEvent.click(selectedImage)
    const closeButton = screen.getByTestId('sg-close-button')

    fireEvent.click(closeButton)

    const wrapper = screen.getByTestId('projects')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper.childElementCount).toEqual(2)
  })
})
