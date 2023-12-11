import { render, screen } from '@testing-library/react'
import { Card } from '@/components/card'

describe('<Card />', () => {
  const args = {
    title: 'Title',
    href: '/recipes',
  }
  it('should be defined', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toBeInTheDocument()
  })
  it('should have title', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toBeInTheDocument()
  })

  it('should have href', () => {
    // GIVEN
    render(<Card {...args} />)

    // WHEN
    const card = screen.getByText('Title')

    // THEN
    expect(card).toHaveAttribute('href', '/recipes')
  })
})
