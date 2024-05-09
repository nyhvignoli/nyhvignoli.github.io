import React from 'react'
import { render, screen } from '@testing-library/react'
import { ResponsiveImage } from './ResponsiveImage'
import { act } from 'react-dom/test-utils' // Import act from react-dom/test-utils

describe('ResponsiveImage', () => {
  test('lazy loads image when it becomes visible', () => {
    // Mock Intersection Observer
    const observeMock = jest.fn()
    const unobserveMock = jest.fn()
    window.IntersectionObserver = jest.fn(function (callback) {
      this.observe = observeMock
      this.unobserve = unobserveMock
      // Simulate calling the callback when element intersects with viewport
      this.callback = callback
    })

    act(() => {
      // Wrap the state update in act()
      render(
        <div style={{ height: '1000px' }}>
          <ResponsiveImage src="image.jpg" alt="Test Image" />
        </div>
      )
    })

    // Check if Intersection Observer is instantiated
    expect(window.IntersectionObserver).toHaveBeenCalled()

    // Simulate element becoming visible by calling the Intersection Observer callback
    act(() => {
      // Wrap the state update in act()
      window.IntersectionObserver.mock.instances[0].callback([
        { isIntersecting: true }
      ])
    })

    // Check if lazy loading is applied after becoming visible
    const imageElement = screen.getByAltText('Test Image')
    expect(imageElement).toHaveAttribute('loading', 'auto')

    // Check if element is unobserved after becoming visible
    expect(unobserveMock).toHaveBeenCalled()
  })
})
