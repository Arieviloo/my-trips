import Map from '.'
import { render, screen } from '@testing-library/react'

describe('<Map />', () => {
  it('should render a value any maker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render pass value maker', () => {
    const place = {
      id: '1',
      name: 'Fortaleza',
      slug: 'fortaleza',
      location: {
        latitude: 10,
        longitude: -15
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/fortaleza/i)).toBeInTheDocument()
  })
})
