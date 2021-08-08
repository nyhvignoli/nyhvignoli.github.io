import { render, screen } from '@testing-library/react'
import App from './App'
import AOS from 'aos'

describe('App', () => {
  test('init Data AOS', () => {
    const initAOSStub = jest.spyOn(AOS, 'init')

    render(<App />)
    expect(initAOSStub).toHaveBeenCalled()
  })

  test('renders MainScreen Wrapper', () => {
    render(<App />)
    const mainScreenWrapper = screen.getByTestId('main-screen-wrapper')
    expect(mainScreenWrapper).toBeInTheDocument()
  })
})
