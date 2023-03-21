import { render, screen } from '@testing-library/react'
import { Pill, PILL_SIZES } from './Pill'
import { smallStyles } from './styles'

describe('Pill', () => {
  test('renders with the correct text', () => {
    render(<Pill text={'foo'} />)
    const pillElement = screen.getByText('foo')
    expect(pillElement).toBeInTheDocument()
  })

  test('renders a small Pill', () => {
    render(<Pill text={'foo'} size={PILL_SIZES.small} />)
    const pillElement = screen.getByText('foo')
    expect(pillElement).toHaveStyle(smallStyles)
  })
})
