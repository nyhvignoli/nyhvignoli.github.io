import { render, screen } from '@testing-library/react'
import { CardHeader } from './CardHeader'

describe('CardHeader', () => {
  const headerProps = {
    title: 'foo',
    subtitle: 'bar',
    cover: { src: 'foo', alt: 'bar' }
  }

  test('renders with the correct Title', () => {
    render(<CardHeader {...headerProps} />)
    const title = screen.getByText('foo')
    expect(title).toBeInTheDocument()
    expect(title.nodeName.toLowerCase()).toEqual('h3')
  })

  test('renders with Cover', () => {
    render(<CardHeader {...headerProps} />)
    const cover = screen.getByRole('img')
    expect(cover).toBeInTheDocument()
    expect(cover).toHaveAttribute('src', headerProps.cover.src)
    expect(cover).toHaveAttribute('alt', headerProps.cover.alt)
  })

  test('renders without Cover', () => {
    render(<CardHeader {...headerProps} cover={{ src: '' }} />)
    expect(() => screen.getByRole('img')).toThrow()
  })

  test('renders with the correct Subtitle', () => {
    render(<CardHeader {...headerProps} />)
    const subtitle = screen.getByText('{ bar }')
    expect(subtitle).toBeInTheDocument()
    expect(subtitle.nodeName.toLowerCase()).toEqual('h4')
  })
})
