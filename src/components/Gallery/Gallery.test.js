import { fireEvent, render, screen } from '@testing-library/react'
import Gallery from './Gallery'

describe('Gallery', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  const projects = [
    {
      title: 'MusiCatchers',
      type: 'Full Stack',
      images: [
        {
          src: 'src',
          alt: 'alt',
          caption: 'caption'
        }
      ],
      description: 'foo',
      githubLink: {
        frontend: 'https://github.com/nyhvignoli/musicatchers-frontend',
        backend: 'https://github.com/nyhvignoli/musicatchers-backend'
      },
      url: '',
      tags: ['react', 'axios']
    },
    {
      title: 'Labeddit',
      type: 'Front-end',
      images: [
        {
          src: 'src',
          alt: 'alt',
          caption: 'caption'
        }
      ],
      description: 'bar',
      githubLink: 'https://github.com/nyhvignoli/labeddit',
      url: 'http://nyhv-labeddit.surge.sh',
      tags: ['react', 'axios', 'styled-components', 'material-ui']
    }
  ]

  test('renders a Gallery Wrapper', () => {
    const props = {
      projects: [],
      imageDetailsOpen: false,
      handleImageDetailsOpen: jest.fn()
    }

    render(<Gallery {...props} />)
    const galleryWrapper = screen.getByTestId('gallery-wrapper')
    expect(galleryWrapper).toBeInTheDocument()
  })

  test('should disable previous button by default', () => {
    const props = {
      projects: [],
      imageDetailsOpen: false,
      handleImageDetailsOpen: jest.fn()
    }

    render(<Gallery {...props} />)
    const previousButton = screen.getByTestId('previous-button')
    expect(previousButton).toHaveProperty('disabled', true)
  })

  test('should enable next button when projects length is greater than 1', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleImageDetailsOpen: jest.fn()
    }

    render(<Gallery {...props} />)
    const nextButton = screen.getByTestId('next-button')
    expect(nextButton).toHaveProperty('disabled', false)
  })

  test('should render AutoPlaySwipeableViews with interval value of 7000', () => {
    jest.useFakeTimers()
    const props = {
      projects,
      imageDetailsOpen: false,
      handleImageDetailsOpen: jest.fn()
    }

    render(<Gallery {...props} />)
    const autoPlaySwipeableViews = screen.getByTestId(
      'auto-play-swipeable-views'
    )

    expect(autoPlaySwipeableViews).toBeInTheDocument()
    expect(setInterval).toHaveBeenCalledTimes(1)
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 7000)
  })

  test('should handle the disabled property of buttons based on active step', () => {
    const props = {
      projects,
      imageDetailsOpen: false,
      handleImageDetailsOpen: jest.fn()
    }

    render(<Gallery {...props} />)
    const previousButton = screen.getByTestId('previous-button')
    const nextButton = screen.getByTestId('next-button')

    expect(previousButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)

    fireEvent.click(nextButton)

    expect(previousButton).toHaveProperty('disabled', false)
    expect(nextButton).toHaveProperty('disabled', true)

    fireEvent.click(previousButton)

    expect(previousButton).toHaveProperty('disabled', true)
    expect(nextButton).toHaveProperty('disabled', false)
  })
})
